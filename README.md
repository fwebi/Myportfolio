# Farah Farah Portfolio

Static portfolio site for showcasing experience, skills, certifications, resume, and selected projects.

## Stack

- HTML
- CSS
- JavaScript
- Project data in JavaScript

## Features

- Personal landing page and about section
- Skills and certification display
- Resume download
- Project gallery driven by `projects.js`
- Modal-based project details
- Click-to-expand screenshots inside project detail galleries

## Project Structure

```text
PORTFOLIO/
├── index.html
├── styles.css
├── script.js
├── projects.js
├── resume.pdf
├── ProfilePic/
│   └── profile.PNG
├── Certs/
│   └── Coursera.jpeg
├── PTO/
│   ├── employeedahsboard.png
│   ├── HrDashboard.png
│   ├── LoginPage.png
│   └── managerdashboard.png
└── Rapid-reliable/
    ├── DashboardPage.png
    ├── DriverPaymentsPage.png
    ├── ExpensePage.png
    ├── LoadsPage.png
    └── TrucksPage.png
```

## Projects Included

- `RRT Management / Rapid Reliable`
  Cross-platform fleet operations app built with .NET MAUI for managing trucks, loads, expenses, drivers, and payments.

- `PTO Tracker System`
  Web app for PTO requests, approvals, and leave policy management across employee, manager, and HR roles.

- `Portfolio Site`
  This portfolio itself, built as a lightweight static site with modal project details.

## Run Locally

Open `index.html` directly in a browser, or use a local server.

```bash
cd /Users/farah/Documents/resumes/PORTFOLIO
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Edit notes

- Replace `resume.pdf` with your real PDF (keep the filename or update the link in `index.html`).
- Edit `projects.js` to add projects. Each entry has a `title`, `summary`, and `details` (HTML). Optional fields are `featured`, `date`, and `link`.

Next steps you may want me to do:

- Add individual project pages generated from a folder of markdown files.
- Add contact form wiring or social links.
- Improve styling and accessibility (a11y) checks and tests.
