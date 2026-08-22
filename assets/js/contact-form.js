// Submits the contact form to a Google Apps Script web app. The POST uses
// FormData so it stays a "simple" cross-origin request and skips the preflight
// that Apps Script cannot answer.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const endpoint = form.dataset.endpoint;
  const fallbackEmail = form.dataset.fallbackEmail;
  const status = document.getElementById("contact-form-status");
  const submitButton = form.querySelector(".contact-submit");
  const elapsedField = document.getElementById("contact-elapsed");
  const loadedAt = Date.now();

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setStatus(message, kind) {
    status.textContent = message;
    status.className =
      "contact-form-status" + (kind ? " contact-form-status-" + kind : "");
  }

  function setFieldError(field, message) {
    const error = document.getElementById(field.id + "-error");
    if (error) error.textContent = message || "";
    field.classList.toggle("is-invalid", Boolean(message));
    field.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function validate() {
    const checks = [
      [
        form.elements.name,
        form.elements.name.value.trim().length >= 2,
        "Please tell me your name.",
      ],
      [
        form.elements.email,
        EMAIL_PATTERN.test(form.elements.email.value.trim()),
        "Please enter a valid email address.",
      ],
      [
        form.elements.message,
        form.elements.message.value.trim().length >= 10,
        "Please write a slightly longer message.",
      ],
    ];

    let firstInvalid = null;
    checks.forEach(function (check) {
      const field = check[0];
      const isValid = check[1];
      setFieldError(field, isValid ? "" : check[2]);
      if (!isValid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  function openMailClient() {
    const subject =
      form.elements.subject.value.trim() || "Message from your website";
    const body =
      form.elements.message.value.trim() +
      "\n\n--\n" +
      form.elements.name.value.trim() +
      "\n" +
      form.elements.email.value.trim();
    window.location.href =
      "mailto:" +
      fallbackEmail +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!validate()) return;

    if (form.elements.website.value) return; // bot
    const elapsed = Math.round((Date.now() - loadedAt) / 1000);
    if (elapsed < 3) {
      setStatus("That was quick! Please take a moment and try again.", "error");
      return;
    }
    elapsedField.value = elapsed;

    if (!endpoint) {
      setStatus("Opening your email app...", null);
      openMailClient();
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    setStatus("Sending your message...", null);

    const payload = new FormData(form);

    try {
      const response = await fetch(endpoint, { method: "POST", body: payload });
      const result = await response.json();
      if (result.status !== "success")
        throw new Error(result.message || "Rejected");

      form.reset();
      setStatus(
        "Thanks! Your message is on its way. I'll get back to you soon.",
        "success",
      );
    } catch (error) {
      // The request itself usually reaches Apps Script even when the browser
      // refuses to expose the response, so retry opaquely before giving up.
      try {
        await fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          body: payload,
        });
        form.reset();
        setStatus(
          "Thanks! Your message is on its way. I'll get back to you soon.",
          "success",
        );
      } catch (finalError) {
        setStatus(
          "Something went wrong. Please email me directly at " +
            fallbackEmail +
            ".",
          "error",
        );
      }
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send message";
    }
  });

  ["name", "email", "message"].forEach(function (fieldName) {
    form.elements[fieldName].addEventListener("input", function () {
      if (this.classList.contains("is-invalid")) setFieldError(this, "");
    });
  });
});
