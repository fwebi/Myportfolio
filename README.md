# Personal Portfolio (scaffold)

This folder contains a simple, static portfolio website scaffold with the following sections:

- Home
- About (Resume download)
- Skills (with Certifications)
- Blog / Projects (latest highlighted; click Details to open project details)

Files added:

- `index.html` — main site
- `styles.css` — styling
- `script.js` — loads `projects.json` and handles modal details
- `projects.json` — sample projects (replace with your own)
- `resume.pdf` — placeholder; replace with your actual resume PDF

How to run

Option 1 — Quick (recommended): start a simple local server from this folder and open in the browser.

```bash
# macOS / zsh: from the PORTFOLIO directory run
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Option 2 — open directly

Open `index.html` in the browser. Note: some browsers block fetch() for local JSON when opened via file://; if projects do not load, run the local server above.

Edit notes

- Replace `resume.pdf` with your real PDF (keep the filename or update the link in `index.html`).
- Edit `projects.json` to add your projects. Each entry supports: `title`, `date`, `summary`, `details` (HTML), and `link`.

Next steps you may want me to do:

- Add individual project pages generated from a folder of markdown files.
- Add contact form wiring or social links.
- Improve styling and accessibility (a11y) checks and tests.
