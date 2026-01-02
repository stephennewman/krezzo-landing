# Krezzo Landing Page - AI Onboarding Document

## Project Overview

**Product**: Krezzo - Digital Innovation & Professional Services Company  
**Website**: https://krezzo.com  
**Location**: Palm Harbor, Florida  
**Repository**: https://github.com/stephennewman/krezzo-landing  
**Hosting**: Vercel

## Purpose & Main Features

Krezzo is a consulting/professional services company focused on helping businesses build, launch, and grow efficiently. The landing page serves as the primary marketing site with a focus on scheduling consultations via Calendly.

### Core Services Offered:
1. **Rapid Prototyping** - Turn ideas into interactive prototypes
2. **Product Development** - End-to-end design and engineering
3. **Go-to-Market Planning** - Strategic launch planning
4. **Market Research** - In-depth business analysis
5. **Branding & Design** - Brand identity and UI/UX design
6. **Messaging & Positioning** - Compelling communication strategy

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.0.0 | UI Framework |
| Vite | 6.2.0 | Build Tool & Dev Server |
| Tailwind CSS | 3.4.1 | Styling |
| React Router DOM | 7.4.1 | Client-side Routing |
| Heroicons | 2.2.0 | Icon Library |
| Space Grotesk | - | Primary Font |

## Project Structure

```
krezzo-landing/
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, Features, CTA, etc.
│   │   └── utils/          # ScrollToTop utility
│   ├── pages/              # PrivacyPolicy, TermsOfService
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles & Tailwind
├── public/
│   └── images/             # Logo assets
├── index.html              # HTML template
├── vercel.json             # Vercel deployment config
└── tailwind.config.js      # Tailwind configuration
```

## Design System

- **Primary Color**: Purple (#7c3aed - primary-600)
- **Font**: Space Grotesk
- **Style**: Clean, minimal, professional
- **Layout**: Centered, max-width 7xl container

## Key External Links

- **Calendly**: https://calendly.com/stephen-krezzo (CTA buttons)
- **Privacy Policy**: /privacy-policy.html
- **Terms of Service**: /terms-of-service.html

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Sub-Projects (Not Part of Main Landing)

This repository also contains two other experimental projects:
- `Lasterday SaaS/` - Journal application with Next.js
- `okr2/` - OKR tracking tool with Supabase

---

## Activity Log

### January 2, 2026
- **Simplified landing page** (`1f79043`): Major redesign
  - Removed Navbar, Hero, Features, and CTA sections
  - Large centered logo as the focal point
  - Single "Get in touch" CTA button → Calendly (opens in new tab)
  - Minimal footer: Privacy Policy | Terms of Service | © 2026
  - Updated copyright year from 2025 to 2026
- **Initial onboarding**: AI agent got up to speed on project
- Latest commit before changes: `5ae1c9b` - Fix logo display issues

### Previous Notable Commits
- `0e45c9f` - Add Vercel configuration and deployment setup
- `98f32aa` - Update hero section: Change headline to 'digital innovation'
- `836a86a` - Remove all image meta tags from index.html for SEO
- `5e8aeb7` - Update homepage layout, features, and content for public launch

---

## Current Status

✅ **Production Ready** - Site is live and functional  
✅ **Clean Git State** - No uncommitted changes  
✅ **Vercel Deployed** - Configured and deploying from main branch

---

## Known Issues & Opportunities

### Problems (Stack Ranked)

| Score | Issue | Description |
|-------|-------|-------------|
| 75 | Outdated Copyright | Footer shows "© 2025" but it's now 2026 |
| 65 | Missing Analytics | No tracking/analytics integration visible |
| 60 | SEO Gaps | Missing OG image, limited meta tags |
| 55 | No Contact Form | Only Calendly - no alternative contact method |
| 50 | Unused Components | CTA.jsx, Pricing.jsx, Testimonials.jsx exist but aren't used |
| 40 | Static Content | No CMS - content changes require code deploys |
| 35 | Mobile Responsiveness | Could be enhanced for smaller screens |
| 30 | No Loading States | No skeleton/loading indicators |

### High-Value Opportunities (Stack Ranked)

| Score | Opportunity | Description |
|-------|-------------|-------------|
| 85 | Add Analytics | Implement GA4/Plausible for visitor insights |
| 80 | Update Copyright | Quick fix to show 2026 |
| 75 | Add Case Studies | Showcase work with visual examples |
| 70 | Add Contact Form | Alternative to Calendly for leads |
| 65 | Testimonials Section | Enable Testimonials.jsx with real quotes |
| 60 | Add Blog | Content marketing for SEO |
| 55 | Pricing Page | Enable Pricing.jsx for transparency |
| 50 | Add OG Image | Social sharing preview image |
| 45 | Email Capture | Newsletter/lead gen form |
| 40 | Animations | Add entrance animations for polish |

