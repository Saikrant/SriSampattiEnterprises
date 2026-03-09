# Sri Sampatti Enterprises Website

Premium uPVC Windows & Doors manufacturer website.
Built with React 19 + Vite + Framer Motion.
Deployed on Cloudflare Pages.

## Development
npm install
npm run dev

## Build
npm run build

## Deploy
Automatic via Cloudflare Pages on push to main branch.

## POST-LAUNCH SEO CHECKLIST

### Domain (Client Action)
- [ ] Purchase domain (recommend: srisampatti.com or srisampatti.in)
- [ ] Connect domain to Cloudflare (add site to Cloudflare DNS)
- [ ] Enable Cloudflare proxy (orange cloud) for CDN + DDoS protection
- [ ] Force HTTPS redirect in Cloudflare SSL/TLS settings
- [ ] Set SSL/TLS mode to "Full (strict)"

### Google Search Console
- [ ] Go to search.google.com/search-console
- [ ] Add property → Domain type → enter domain
- [ ] Verify via DNS TXT record in Cloudflare DNS
- [ ] Submit sitemap: https://www.srisampatti.com/sitemap.xml
- [ ] Request indexing for homepage manually
- [ ] Check Coverage report after 48 hours

### Google Analytics 4
- [ ] Create account at analytics.google.com
- [ ] Create GA4 property → get Measurement ID (G-XXXXXXXXXX)
- [ ] Add Measurement ID to VITE_GA_MEASUREMENT_ID env variable
- [ ] Verify real-time data is recording after deployment
- [ ] Set up conversion goal: "Quote Form Submitted"

### Google Business Profile (Critical for Local SEO)
- [ ] Go to business.google.com → Create/claim listing
- [ ] Business name: "Sri Sampatti Enterprises"
- [ ] Category: "Window supplier" + "Door supplier"
- [ ] Address: Rajendranagar, Hyderabad address
- [ ] Phone: +91 95151 04922
- [ ] Website: https://www.srisampatti.com
- [ ] Add all product photos (uPVC windows, installations)
- [ ] Add business hours
- [ ] Add service areas: Hyderabad, Telangana, AP, Karnataka
- [ ] Verify via postcard or phone call (Google requirement)

### Microsoft Clarity
- [ ] Create account at clarity.microsoft.com
- [ ] Get Project ID
- [ ] Add to VITE_CLARITY_PROJECT_ID env variable
- [ ] Verify recordings after 24 hours

### Local Directory Listings (important for local SEO)
- [ ] Justdial: justdial.com → List business
- [ ] Sulekha: sulekha.com → List business
- [ ] IndiaMart: indiamart.com → List company
- [ ] TradeIndia: tradeindia.com → List
- [ ] Yellow Pages India: yellowpages.co.in
- [ ] All listings: same NAP (Name, Address, Phone) everywhere

### OG Image
- [ ] Create og-image.jpg (1200×630px)
- [ ] Place in /public/og-image.jpg
- [ ] Test: developers.facebook.com/tools/debug/

### Favicon & Icons
- [ ] Export logo as PNG: 16px, 32px, 192px, 512px versions
- [ ] Place in public/icons/ folder
- [ ] Test favicon appears in browser tab after deploy
