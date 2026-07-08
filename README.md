# Farah Farah Portfolio

Static portfolio site for showcasing experience, skills, certifications, resume, and selected projects.

## Stack

- HTML
- CSS
- JavaScript
- JSON-driven project content

## Features

- Personal landing page and about section
- Skills and certification display
- Resume download
- Project gallery driven by `projects.json`
- Modal-based project details
- Click-to-expand screenshots inside project detail galleries

## Project Structure

```text
PORTFOLIO/
├── index.html
├── styles.css
├── script.js
├── projects.json
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

Use a local server so `projects.json` loads correctly.

```bash
cd /Users/farah/Documents/resumes/PORTFOLIO
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Editing Content

- Update project cards and modal content in `projects.json`.
- Update layout and visual styling in `styles.css`.
- Update modal behavior and project rendering in `script.js`.
- Update page structure and section content in `index.html`.

## GitHub Pages Deployment

This site can be deployed directly with GitHub Pages because it is fully static.

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Set the source to the `main` branch and `/ (root)`.
5. Wait for the Pages build to finish.

Your site will then be available at:

```text
https://<your-username>.github.io/<repo-name>/
```

## Notes

- `projects.json` uses HTML inside the `details` field for modal content.
- Screenshot paths are relative to the site root, so folder names need to stay in sync with the JSON.
- If an asset is moved, update its path in `index.html` or `projects.json`.
