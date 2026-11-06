# Origin7 — concept website

Premium multi-page website concept for **Origin7 Ltd**, a BIM and digital construction consultancy serving Northern Ireland and Ireland.

This is a private presentation concept. It is **not** an official Origin7 publication until the company authorises it.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Motion
- Zod (contact form)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Configuration before launch

Copy `.env.example` and set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata and sitemap |
| `SITE_LAUNCHED=true` | Removes `noindex` and allows search engines |
| `PREVIEW_PASSWORD` | Optional Basic-auth gate for a private preview |
| `CONTACT_DELIVERY_ENABLED=true` | Turns on real enquiry delivery |
| `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` / `RESEND_API_KEY` | Authorised email destination |

Until `CONTACT_DELIVERY_ENABLED` is set, the contact form validates details and offers a `mailto:` fallback. It does **not** store or transmit personal data to a third party.

## Brand assets

- Logo: supplied Origin7 wordmark (`public/brand/`)
- Founder portrait: supplied photograph of Melanie Dawson (`public/images/melanie-dawson.webp`)
- Palette sampled from the logo artwork (magenta `#B81868`, violet `#662A84`)

Regenerate processed assets:

```bash
node scripts/prepare-assets.mjs path/to/logo.png path/to/portrait.jpg
```
