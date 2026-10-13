# Istueta Roofing — Google Ads funnel

Landing page + thank-you page for Istueta Roofing (South Florida), built on the Sunstrong structure:
form first on mobile, call button always visible, Google social proof next to the headline,
licensed & insured messaging, and a real-client photo carousel.

**Live preview:** https://opshomedirective.github.io/istueta-roofing-funnel/

| File | What it is |
|---|---|
| `index.html` | Landing page (live survey embedded, relative image paths) |
| `thank-you.html` | Thank-you page preview |
| `ghl/funnel.html` | **GHL-ready** landing page (paste into a Custom HTML element): logo = `{{custom_values.funnel__company_logo}}`, photos = GHL media links |
| `ghl/thank-you.html` | **GHL-ready** thank-you page |
| `form/survey.css` | Custom CSS for the GHL survey (Istueta colors) |
| `form/form-header.html` | Survey header block ("Only if you're a homeowner in Miami-Dade or Broward") |
| `form/form-footer.html` | Survey button styles (Next / Submit / Back) |
| `assets/` | Logo and photos (hosted through GitHub Pages) |
| `AI-STUDIO-PROMPT.md` | Master prompt to import the pages with GHL AI Studio |
| `ghl-assets.json` | GHL Media Library link for each photo (empty = GitHub Pages fallback) |
| `build.js` | Regenerates `ghl/` from the previews: `node build.js` |

Only custom value: `funnel__company_logo`. Everything else is hard-coded, including the GHL survey embed (`rm2ZsHLrR9CpR3M7TmKk`).

Brand (from istuetaroofing.com): red `#A8131A`, charcoal `#16140F`, cream `#FAF7F4`, clay `#D89B7A`;
Cormorant Garamond (headlines) + Inter (text). Phone: (754) 227-2759.
