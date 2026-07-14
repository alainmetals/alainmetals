# AL AIN METALS CORPORATION LIMITED

Corporate marketing and lead-generation website for a Tanzania-based precious metals, gemstones and strategic minerals trading business.

## Technology

- Next.js 16 App Router and React 19
- TypeScript, Tailwind CSS 4 and Framer Motion
- Static generation for product, sourcing, destination, industry, guide, resource and trust pages
- Vercel-compatible contact API using Resend

## Local development

Requires Node.js 20 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Useful checks:

```bash
npm run lint
npm test
npm run build
```

## Contact form configuration

Create a Resend account, verify the sending domain, and set these values in `.env.local` and in the Vercel project:

- `RESEND_API_KEY`: server-side API key; never expose it as a public variable.
- `CONTACT_FROM_EMAIL`: sender on the verified domain.
- `CONTACT_TO_EMAIL`: inbox that receives inquiries.

If these values are absent, the form shows an honest configuration error and directs visitors to the public email address. It never displays a false success state.

## Search Console

Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` only after Google Search Console provides the real token. The verification meta tag is omitted when the value is empty.

## Content and data

Company-wide content and contact details live in `src/lib/siteData.ts`. Structured collections live in `src/lib/data/`. Images are in `public/assets/images/`.

English is the only published locale. `src/lib/i18n/` is an incomplete future-language scaffold and is not connected to routing or the page content. Do not advertise French or Arabic support until every route, metadata entry and legal/compliance statement has been professionally translated and reviewed.

## Compliance review

Statements about licences, sourcing, purity, traceability, laboratories, OECD alignment, AML/KYC, export capability and product availability are business claims, not facts established by the software. Before each release, an authorised company or legal reviewer must compare them with current licences, contracts, laboratory arrangements and regulatory requirements. The footer states that supply remains subject to availability, approvals, law and commercial agreements.

## Deployment

The application is configured for Vercel. Add the production environment variables, deploy, then verify the contact form, security headers, sitemap, robots file and representative dynamic pages. Do not commit `.env.local` or provider credentials.
