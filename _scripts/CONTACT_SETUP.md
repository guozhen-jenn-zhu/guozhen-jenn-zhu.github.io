# Contact page setup

Everything behind [`/contact/`](../_pages/contact.md) is configured through the `contact:` block in
`_config.yml`. This file documents the Google-side setup that block depends on, so it can be rebuilt or
handed off later. Nothing here runs on the server — GitHub Pages only serves static files.

## 1. Booking widget (done)

The booking page is a Google Calendar **appointment schedule** on the `gzzhu@terpmail.umd.edu` account:
<https://calendar.app.google/LSrVeVug4B66Gdiu8>.

What it does: shows only genuinely free slots, generates a Google Meet link on booking, and emails the
invitation to both parties.

Things worth re-checking if slots ever look wrong:

- Open the schedule in Google Calendar and click **Calendars**. "Check calendars for availability" must be on,
  with both the terpmail calendar and the subscribed `guozhen.zhu@originwirelessai.com` calendar ticked.
  If the work calendar is not listed, re-share it from the Origin account to terpmail and accept the
  subscription so it appears under "Other calendars".
- Only events marked **Busy** block slots. Events set to "Free" still show as bookable.
- Changing the schedule can change the booking URL. If it does, update `contact.booking_url` in `_config.yml`.

The site renders this with Google's official scheduling-button script, which opens the booking page in an
overlay. A plain link to the same URL sits underneath as a fallback, since a raw iframe of a booking page is
blocked by Google's `X-Frame-Options`.

## 2. Availability grid (done)

Each calendar listed under `contact.availability.calendars` must be published as free/busy only:

Google Calendar → **Settings** → pick the calendar → **Access permissions for events** →
check **Make available to public** → set the dropdown to **See only free/busy (hide details)**.

That last dropdown is what keeps event titles, guests, and locations private while still showing the time as
blocked.

Both `gzzhu@terpmail.umd.edu` and `guozhen.zhu@originwirelessai.com` are set up this way and render correctly.

If a calendar ever loses this setting, visitors see a yellow "events from one or more calendars could not be
shown" banner across the grid, and loading its embed while logged out redirects to a Google sign-in page. Check
an individual calendar in a private window with:
`https://calendar.google.com/calendar/embed?mode=WEEK&src=<calendar-id>`

Note that a calendar you merely subscribe to cannot be re-published; only the owning account can make it public.
This applies to the grid only. Conflict checking on the booking page works regardless, because that runs as you
rather than as an anonymous visitor.

To hide the grid entirely, set `contact.availability.enabled: false`. The booking widget is unaffected.

Verify from a logged-out browser after any change: open `/contact/` in a private window and confirm the grid
loads, reads "busy", and shows no warning banner.

## 3. Message form (done)

The form posts to a Google Apps Script web app that emails you. It is deployed and wired into
`contact.form_endpoint`. These are the steps used, for when it needs to be rebuilt or redeployed:

1. Sign in as `gzzhu@terpmail.umd.edu` and go to <https://script.google.com/home/projects/create>.
2. Name the project something like "Website contact form".
3. Replace the contents of `Code.gs` with [`contact_form.gs`](contact_form.gs) from this folder, then save.
4. Click **Deploy → New deployment**, choose type **Web app**, and set:
   - Description: anything
   - Execute as: **Me (gzzhu@terpmail.umd.edu)**
   - Who has access: **Anyone**

   Both of those matter. "Execute as: Me" is what lets the script send mail from your account, and
   "Anyone" is what lets an anonymous visitor trigger it.
5. Click **Deploy** and authorize the script when prompted. Google shows an "unverified app" warning because
   you are the developer — choose **Advanced → Go to (project name)** and allow it.
6. Copy the **Web app URL** (it ends in `/exec`) and paste it into `_config.yml`:

   ```yaml
   contact:
     form_endpoint: https://script.google.com/macros/s/AKfy.../exec
   ```

7. Open that `/exec` URL directly in a browser. It should return `{"status":"success","message":"Contact endpoint is live."}`.

Until `form_endpoint` is filled in, the form still renders and validates, but the submit button falls back to
opening the visitor's mail client with the message prefilled.

### Changing behavior

The `CONFIG` object at the top of `contact_form.gs` controls the recipient, subject prefix, spam thresholds,
and two optional extras that are off by default: `sendAcknowledgement` (auto-reply to the sender) and
`logSheetId` (append every message to a Google Sheet). After editing, redeploy with
**Deploy → Manage deployments → edit → Version: New version**, otherwise the live URL keeps serving the old code.

### Spam handling

Three layers, no captcha: a hidden honeypot field, a minimum time-on-page of 3 seconds, and a cap of 20
messages per hour enforced in `CacheService`. If spam ever gets through, the next step would be adding
Cloudflare Turnstile, which is free and works on static sites.

### Quotas

Consumer and Workspace accounts can send on the order of 100 to 1500 emails per day through `MailApp`, far
above what a personal contact form needs. Bounces do not consume quota.
