# Cybersecurity site (Next.js 14, TypeScript, Tailwind)
Run: `npm install && npm run dev` (http://localhost:3000). Build: `npm run build && npm start`. Deploy: push to Git and import into Vercel.
Edit company details in `lib/site.ts`; service content in `lib/data.ts` (one template renders all 8 service pages).
Contact form: validates in the browser and posts to `/api/contact`, which forwards to the URL in env var `CONTACT_WEBHOOK_URL`
(e.g. a Formspree, Zapier or your CRM webhook). Until set, the API returns 501 and the form shows an error state.
Before launch: replace all [placeholders], write real Privacy/Terms, confirm monitoring hours and cloud platforms.
