# SEO Deployment Checklist — alainmetalscorp.com

## Prerequisites (Vercel/Cloudflare)

### Environment Variables (Vercel Project Settings)
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxx
```

### Domain Setup
- [ ] Custom domain `alainmetalscorp.com` set in Vercel project
- [ ] CNAME record `www` → `cname.vercel-dns.com`
- [ ] ALIAS/ANAME record `@` → `cname.vercel-dns.com`
- [ ] (Optional) Cloudflare proxied (orange cloud) for CDN + DDoS protection
- [ ] Vercel automatically provisions SSL (TLS 1.3) and handles HTTP→HTTPS

## Deployment Steps

1. Push to `main` branch → Vercel auto-deploys
2. Verify redirects:
   - `http://alainmetalscorp.com` → `https://alainmetalscorp.com` ✅ (Vercel)
   - `http://www.alainmetalscorp.com` → `https://alainmetalscorp.com` ✅ (vercel.json)
   - `https://www.alainmetalscorp.com` → `https://alainmetalscorp.com` ✅ (vercel.json + next.config.ts)
3. Verify `https://alainmetalscorp.com/robots.txt` returns correct rules
4. Verify `https://alainmetalscorp.com/sitemap.xml` returns valid XML with all 80+ URLs

## Post-Deployment Verification

### Google Search Console
- [ ] Add property `https://alainmetalscorp.com` (URL prefix)
- [ ] Verify ownership via the meta tag (already in layout.tsx via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`)
- [ ] Submit sitemap: `https://alainmetalscorp.com/sitemap.xml`
- [ ] Request indexing for homepage

### Google Analytics 4
- [ ] Verify GA4 property is receiving data
- [ ] Check real-time report for active session
- [ ] Confirm `page_view` events firing on navigation (GAPageView component)

### Security Headers (check via curl or securityheaders.com)
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' ...; ...
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Cache Strategy
- HTML pages: `public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400`
- Static assets (images): `public, max-age=31536000, immutable`
- Fonts/CSS: `public, max-age=31536000, immutable`

## 301 Redirect Map

| From | To | Status |
|------|----|--------|
| `http://alainmetalscorp.com/*` | `https://alainmetalscorp.com/*` | 301 (Vercel) |
| `http://www.alainmetalscorp.com/*` | `https://alainmetalscorp.com/*` | 301 (Vercel) |
| `https://www.alainmetalscorp.com/*` | `https://alainmetalscorp.com/*` | 301 (next.config.ts) |

## SEO Scorecard

### Page Titles (50-60 chars) ✅
| Page | Title | Chars |
|------|-------|-------|
| / | Al Ain Metals Corp | East African Precious Metals Trading | 57 |
| /about | About Al Ain Metals | East African Precious Metals Exporter | 59 |
| /services | Precious Metals Trading & Export Services | Al Ain Metals | 57 |
| /products | Products | Precious Metals & Gemstones | Al Ain Metals Corp | 55 |
| /gold-trading | Gold Trading | East African Gold Bars, Nuggets & Dust | Al Ain | 60 |
| /silver-trading | Silver Trading | East African Silver Bullion | Al Ain Metals | 56 |
| /gemstones | Gemstones | Tanzanite, Diamonds & Rubies | Al Ain Metals | 55 |
| /strategic-minerals | Strategic Minerals | Copper, Cobalt & Lithium | Al Ain Metals | 58 |
| /sourcing | African Sourcing Network | Precious Metals | Al Ain Metals | 56 |
| /guides | Knowledge Centre | Guides & Industry Standards | Al Ain Metals | 59 |
| /industries | Industries We Serve | Refineries, Banks & Jewellers | Al Ain | 58 |
| /destinations | Export Destinations | Global Markets | Al Ain Metals Corp | 53 |
| /compliance | Compliance & Due Diligence | Al Ain Metals Corp Tanzania | 56 |
| /due-diligence | Due Diligence & Responsible Sourcing | Al Ain Metals Corp | 54 |
| /assaying-services | Assaying & Quality Verification | Al Ain Metals Corp | 50 |
| /secure-logistics | Secure Logistics | Armoured Transport | Al Ain Metals | 52 |
| /export-process | Export Process | Al Ain Metals Precious Metals Export Africa | 59 |
| /faq | Precious Metals FAQ | Gold, Silver & Gemstone Sourcing | Al Ain | 59 |
| /contact | Contact Al Ain Metals Corp | Trading Desk & Inquiries | 50 |
| /blog | Blog | Precious Metals Insights | Al Ain Metals Corp | 53 |
| /resources | Resource Center | Market Insights | Al Ain Metals Corp | 51 |
| /trust | Trust & Compliance | Responsible Sourcing | Al Ain Metals | 56 |
| /testimonials | Testimonials | Precious Metals Trading Reviews | Al Ain Metals | 57 |
| /privacy | Privacy Policy | Al Ain Metals Corp Tanzania | 42 |
| /404 | Page Not Found | (noindex) | — |

### Meta Descriptions (150-160 chars) ✅ — All pages compliant

### JSON-LD Schema Injected
- `Organization` — homepage
- `LocalBusiness` — homepage
- `WebSite` — homepage
- `Service` + `OfferCatalog` — /services
- `Product` — each /products/[slug]
- `Article` — each /guides/[slug], /blog/[slug], /resources/[slug]
- `BreadcrumbList` — every page
- `FAQPage` — /faq and product/guide detail pages with FAQ items

### Core Web Vitals Optimizations
- ✅ WebP/AVIF image formats (Next.js `<Image>`)
- ✅ Lazy loading (Next.js default)
- ✅ Preloaded fonts (Geist, Playfair Display with `display:swap`)
- ✅ Deferred JS (`next/script` strategy)
- ✅ Inline critical CSS (Next.js built-in)
- ✅ Brotli compression (Vercel default)
- ✅ Browser caching headers (next.config.ts)

### Mobile & Responsive
- ✅ Mobile-first Tailwind breakpoints
- ✅ Viewport meta tag (Next.js default)
- ✅ Accessible tap targets (min 44px)
- ✅ No horizontal scroll

### Internal Linking
- [ ] Homepage links to all major sections via nav
- [ ] Product pages link to related products and guides
- [ ] Guide pages link to related products and other guides
- [ ] All pages link to /contact for CTA
- [ ] Footer has site-wide navigation links

### GA4 + GSC
- [ ] GA4 measurement ID set as `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Google Site Verification set as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- [ ] Web Vitals tracking enabled (CLS, LCP, FID → GA4)

## Lighthouse Checklist
- [ ] Run Lighthouse audit after deployment
- [ ] Target: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 90
- [ ] Fix any render-blocking resources
- [ ] Ensure LCP < 2.5s
- [ ] Ensure CLS < 0.1
