# Cybersecurity site (Next.js 14, TypeScript, Tailwind) - static export
Local: `npm install && npm run dev`. Static build: `npm run build` (output in `out/`).

## Deploy to GitHub Pages
1. Push this project to the `main` branch (replace the old files).
2. Repo Settings > Pages > Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically.
4. Contact form: create a form at Formspree (or similar), then add repo variable `FORM_ENDPOINT` (Settings > Secrets and variables > Actions > Variables) with its URL. Until set, the form shows an error state.

Edit company details in `lib/site.ts`, services in `lib/data.ts`. Replace all [placeholders] before launch.
