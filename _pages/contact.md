---
layout: page
title: Contact
permalink: /contact/
description: Book a time on my calendar or send me a message.
nav: true
nav_order: 7
contact_form: true
---

<style>
.contact-intro {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--global-text-color-light);
  margin-bottom: 2.5rem;
}

.contact-section {
  margin-bottom: 3rem;
}

.contact-section h2 {
  font-size: 1.35rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.contact-section-note {
  font-size: 0.88rem;
  color: var(--global-text-color-light);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

/* Booking */
.booking-card {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 10px;
  background: var(--global-card-bg-color);
}

.booking-copy h3 {
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0 0 0.35rem;
}

.booking-copy p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--global-text-color-light);
  line-height: 1.6;
}

.booking-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
}

.booking-fallback {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
  border-bottom: 1px dashed var(--global-divider-color);
}

.booking-fallback:hover {
  color: var(--global-theme-color);
  border-bottom-color: var(--global-theme-color);
}

/* Availability grid. Google only serves a light iframe, so in dark mode it is
   inverted to match the page instead of sitting there as a white slab. */
.calendar-embed {
  border: 1px solid var(--global-divider-color);
  border-radius: 10px;
  overflow: hidden;
  background: #ffffff;
}

html[data-theme="dark"] .calendar-embed {
  background: var(--global-card-bg-color);
}

html[data-theme="dark"] .calendar-embed iframe {
  filter: invert(0.92) hue-rotate(180deg);
}

.calendar-embed-frame {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.calendar-embed iframe {
  display: block;
  border: 0;
  min-width: 640px;
}

/* Message form */
.contact-form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0 1rem;
}

.contact-form-row .contact-field {
  flex: 1 1 220px;
}

.contact-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.9rem;
}

.contact-field label {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--global-text-color-light);
  margin-bottom: 0.35rem;
}

.contact-optional {
  text-transform: none;
  letter-spacing: 0;
  opacity: 0.7;
}

.contact-field input,
.contact-field textarea {
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  font-family: inherit;
  font-size: 0.92rem;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.contact-field textarea {
  resize: vertical;
  min-height: 140px;
}

.contact-field input:focus,
.contact-field textarea:focus {
  outline: none;
  border-color: var(--global-theme-color);
  box-shadow: 0 0 0 3px rgba(181, 9, 172, 0.12);
}

html[data-theme="dark"] .contact-field input:focus,
html[data-theme="dark"] .contact-field textarea:focus {
  box-shadow: 0 0 0 3px rgba(38, 152, 186, 0.2);
}

.contact-field input.is-invalid,
.contact-field textarea.is-invalid {
  border-color: #d64545;
}

.contact-field-error {
  font-size: 0.76rem;
  color: #d64545;
  margin-top: 0.25rem;
  min-height: 1rem;
}

.contact-hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.contact-form-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.9rem;
  margin-top: 0.4rem;
}

.contact-submit {
  padding: 0.6rem 1.5rem;
  border: 1px solid var(--global-theme-color);
  border-radius: 6px;
  background: transparent;
  color: var(--global-theme-color);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

.contact-submit:hover:not(:disabled) {
  background: var(--global-theme-color);
  color: var(--global-bg-color);
}

.contact-submit:disabled {
  opacity: 0.55;
  cursor: default;
}

.contact-form-note {
  font-size: 0.78rem;
  color: var(--global-text-color-light);
}

.contact-form-status {
  margin-top: 1rem;
  font-size: 0.88rem;
  min-height: 1.2rem;
}

.contact-form-status-success {
  color: #2e7d32;
}

.contact-form-status-error {
  color: #d64545;
}

html[data-theme="dark"] .contact-form-status-success {
  color: #66bb6a;
}

html[data-theme="dark"] .contact-form-status-error,
html[data-theme="dark"] .contact-field-error {
  color: #ef8b8b;
}

@media (max-width: 576px) {
  .booking-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

<p class="contact-intro">
I am always glad to talk about research collaborations in ambient intelligence, foundation models for perception,
and multimodal or temporal learning, as well as invited talks and mentoring. The quickest way to reach me is to grab a
slot below; otherwise, drop me a note and I will get back to you. I read every message I receive, though replies are
sometimes delayed by a few days. If you have not heard back within a week, please feel free to ping me again.
</p>

<div class="contact-section">
  <h2>Schedule a meeting</h2>
  <p class="contact-section-note">
    Only times I am genuinely free show up here, checked against both my academic and work calendars. Booking a slot
    creates a Google Meet link and sends the invitation to both of us, so there is nothing else you need to do.
    All times are shown in your own timezone.
  </p>

  <div class="booking-card">
    <div class="booking-copy">
      <h3>{{ site.contact.booking_label }}</h3>
      <p>Pick any open slot that suits you. Add a short note about what you would like to discuss when you book.</p>
    </div>
    <div class="booking-actions">
      <!-- Google Calendar appointment scheduling button -->
      <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet">
      <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
      <script>
        (function () {
          var target = document.currentScript;
          window.addEventListener('load', function () {
            calendar.schedulingButton.load({
              url: '{{ site.contact.booking_url }}?gv=true',
              color: '#b509ac',
              label: '{{ site.contact.booking_label }}',
              target: target,
            });
          });
        })();
      </script>
      <a class="booking-fallback" href="{{ site.contact.booking_url }}" target="_blank" rel="noopener noreferrer">
        or open the booking page in a new tab
      </a>
    </div>
  </div>
</div>

{% if site.contact.availability.enabled %}

<div class="contact-section">
  <h2>My availability</h2>
  <p class="contact-section-note">
    A read-only view of when I am already booked, combining my academic and work calendars in
    {{ site.contact.timezone_label }}. Event titles, guests, and locations stay private: only the blocked-out time is
    visible.
  </p>
  {% include calendar_embed.liquid %}
</div>
{% endif %}

<div class="contact-section">
  <h2>Send a message</h2>
  <p class="contact-section-note">
    For anything that does not need a meeting. Your message lands in my inbox at
    <a href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a>, and I will reply to the address you leave here.
  </p>
  {% include contact_form.liquid %}
</div>
