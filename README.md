# Istueta Roofing — Google Ads funnel

Landing page + thank-you page for Istueta Roofing (South Florida), built on the Sunstrong structure:
form first on mobile, call button always visible, Google social proof next to the headline,
licensed & insured messaging, and a real-client photo carousel.

**Live preview:** https://opshomedirective.github.io/istueta-roofing-funnel/

| File | What it is |
|---|---|
| `index.html` | Landing page preview (demo survey, relative image paths) |
| `thank-you.html` | Thank-you page preview |
| `ghl/funnel.html` | **GHL-ready** landing page: survey = `{{custom_values.funnel__survey_code}}`, absolute image URLs |
| `ghl/thank-you.html` | **GHL-ready** thank-you page |
| `form/survey.css` | Custom CSS for the GHL survey (Istueta colors) |
| `form/form-header.html` | Survey header block ("Only if you're a homeowner in Miami-Dade or Broward") |
| `form/form-footer.html` | Survey button styles (Next / Submit / Back) |
| `assets/` | Logo and photos (hosted through GitHub Pages) |
| `AI-STUDIO-PROMPT.md` | Master prompt to import the pages with GHL AI Studio |
| `build.js` | Regenerates `ghl/` from the previews: `node build.js` |

Only custom value used: `funnel__survey_code`. Everything else is hard-coded.

Brand (from istuetaroofing.com): red `#A8131A`, charcoal `#16140F`, cream `#FAF7F4`, clay `#D89B7A`;
Cormorant Garamond (headlines) + Inter (text). Phone: (754) 227-2759.
