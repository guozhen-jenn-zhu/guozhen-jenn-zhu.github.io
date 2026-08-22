/**
 * Backend for the contact form at https://guozhen-jenn-zhu.github.io/contact/
 *
 * Paste this into a Google Apps Script project owned by the account that should
 * receive the messages, then deploy it as a web app with:
 *   Execute as:      Me
 *   Who has access:  Anyone
 * Copy the resulting /exec URL into `contact.form_endpoint` in _config.yml.
 *
 * Full walkthrough: _scripts/CONTACT_SETUP.md
 */

var CONFIG = {
  recipient: 'gzzhu@terpmail.umd.edu',
  subjectPrefix: '[Website] ',
  senderName: 'Website contact form',
  minSecondsOnPage: 3,
  maxMessagesPerHour: 20,
  maxMessageLength: 5000,
  // Optional extras, both off by default.
  sendAcknowledgement: false,
  logSheetId: '',
};

function doPost(e) {
  try {
    var params = (e && e.parameter) || {};

    // Honeypot. Report success so bots do not learn anything from retrying.
    if (params.website) {
      return respond('success');
    }

    if (Number(params.elapsed || 0) < CONFIG.minSecondsOnPage) {
      return respond('error', 'That was submitted a little too quickly. Please try again.');
    }

    var name = clean(params.name, 120);
    var email = clean(params.email, 200);
    var subject = clean(params.subject, 200);
    var message = clean(params.message, CONFIG.maxMessageLength);

    if (!name || !message) {
      return respond('error', 'Please include your name and a message.');
    }
    if (!isEmail(email)) {
      return respond('error', 'Please enter a valid email address.');
    }
    if (!withinRateLimit()) {
      return respond('error', 'Too many messages right now. Please email me directly instead.');
    }

    MailApp.sendEmail({
      to: CONFIG.recipient,
      replyTo: email,
      name: CONFIG.senderName,
      subject: CONFIG.subjectPrefix + (subject || 'New message from ' + name),
      body: buildPlainBody(name, email, subject, message),
      htmlBody: buildHtmlBody(name, email, subject, message),
    });

    if (CONFIG.logSheetId) {
      logToSheet([new Date(), name, email, subject, message]);
    }

    if (CONFIG.sendAcknowledgement) {
      MailApp.sendEmail({
        to: email,
        name: 'Guozhen Zhu',
        subject: 'Thanks for reaching out',
        body:
          'Hi ' +
          name +
          ",\n\nThanks for your message. It reached me and I'll get back to you soon.\n\nBest,\nGuozhen\n\n---\nYour message:\n" +
          message,
      });
    }

    return respond('success');
  } catch (error) {
    return respond('error', 'Unexpected error: ' + error);
  }
}

/** Lets you confirm the deployment is live by opening the /exec URL in a browser. */
function doGet() {
  return respond('success', 'Contact endpoint is live.');
}

function buildPlainBody(name, email, subject, message) {
  return (
    'From: ' +
    name +
    ' <' +
    email +
    '>\n' +
    'Subject: ' +
    (subject || '(none)') +
    '\n' +
    'Received: ' +
    new Date().toString() +
    '\n\n' +
    message
  );
}

function buildHtmlBody(name, email, subject, message) {
  return (
    '<div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6">' +
    '<p style="margin:0 0 4px"><strong>From:</strong> ' +
    escapeHtml(name) +
    ' &lt;<a href="mailto:' +
    encodeURI(email) +
    '">' +
    escapeHtml(email) +
    '</a>&gt;</p>' +
    '<p style="margin:0 0 16px"><strong>Subject:</strong> ' +
    escapeHtml(subject || '(none)') +
    '</p>' +
    '<div style="padding:12px 16px;border-left:3px solid #b509ac;background:#fafafa;white-space:pre-wrap">' +
    escapeHtml(message) +
    '</div>' +
    '<p style="margin:16px 0 0;color:#777;font-size:12px">Sent from the contact form on guozhen-jenn-zhu.github.io. ' +
    'Replying to this email goes straight back to the sender.</p>' +
    '</div>'
  );
}

function withinRateLimit() {
  var cache = CacheService.getScriptCache();
  var key = 'contact_' + Math.floor(Date.now() / 3600000);
  var count = Number(cache.get(key) || 0) + 1;
  cache.put(key, String(count), 3600);
  return count <= CONFIG.maxMessagesPerHour;
}

function logToSheet(row) {
  try {
    SpreadsheetApp.openById(CONFIG.logSheetId).getSheets()[0].appendRow(row);
  } catch (error) {
    // Logging must never block delivery of the message itself.
    console.error('Could not write to log sheet: ' + error);
  }
}

function clean(value, maxLength) {
  return String(value || '')
    .trim()
    .slice(0, maxLength);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function respond(status, message) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: status, message: message || '' })
  ).setMimeType(ContentService.MimeType.JSON);
}
