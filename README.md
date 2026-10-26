# AquaFresh Water Delivery — Integrated Internship Project

One static, responsive website that combines three internship tasks:

1. **AquaFresh Water Delivery** — landing page and delivery services (Home, Water Delivery)
2. **Ezitech Water Bottles** — product showcase (Water Bottles)
3. **Ezitech Contact Form** — validated contact form (Contact Us)

**Live site (after deployment):** https://faiqachaudhry.github.io/aquafresh-internship/
**Repository:** https://github.com/Faiqachaudhry/aquafresh-internship

## Features
- Glass-effect sticky navigation (`<nav>`, `<ul>`, `<li>`) with mobile menu, smooth scrolling and active-section highlight
- Hero section with heading, description, image and CTA buttons
- Flexbox layouts, `@media (max-width: 600px)` mobile styles
- Product cards with hover effects (light blue / white / aqua theme)
- Contact form: required fields, email validation (no regex), inline error and success messages, accessible labels, `aria-live`
- Keyboard focus styles, skip link, reduced-motion support
- Pure HTML5, CSS3 and vanilla JavaScript. No build tools or backend.

## Structure
```
index.html
README.md
src/
  css/style.css
  js/script.js
  assets/ (favicon.svg, hero.svg, bottle-small.svg, bottle-medium.svg, bottle-large.svg)
```

## Testing checklist
- Open the live URL; all four nav links scroll to their sections.
- Resize to under 600px: menu button appears and works; no sideways scrolling.
- Press Tab: visible focus outlines on links, buttons and fields.
- Submit the empty form: errors appear. Enter `abc` as email: error. Fill all fields correctly: success message.
- Browser console shows no errors; all images load.

## Note
The contact form is front-end only (GitHub Pages has no backend). It validates input and shows a success message but does not send email.

## Deployment
Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
