# Master prompt — GHL AI Studio (Istueta Roofing funnel)

Copy everything inside the block below into GHL AI Studio.

```text
You are setting up a 2-step funnel in this GoHighLevel sub-account for ISTUETA ROOFING (Google Ads landing page). The pages are ALREADY DESIGNED AND CODED. Your job is to import them faithfully, not to design anything.

SOURCE CODE (public GitHub repo: opshomedirective/istueta-roofing-funnel)
- Step 1 – Landing page (funnel):
  https://raw.githubusercontent.com/opshomedirective/istueta-roofing-funnel/main/ghl/funnel.html
- Step 2 – Thank-you page:
  https://raw.githubusercontent.com/opshomedirective/istueta-roofing-funnel/main/ghl/thank-you.html
- Live visual reference (how it must look, desktop and mobile):
  https://opshomedirective.github.io/istueta-roofing-funnel/
  https://opshomedirective.github.io/istueta-roofing-funnel/thank-you.html

HOW TO BUILD EACH PAGE
1. Create the funnel "Istueta Roofing – Google Ads" with two steps: "Free Estimate" (landing) and "Thank You".
2. On each page, add ONE full-width section with ONE full-width row/column, and inside it ONE Custom HTML / Code element.
3. Paste the COMPLETE contents of the matching file (from <!DOCTYPE html> to </html>) into that Custom HTML element, character for character.
4. Set the section, row, column and element padding and margin to 0, background transparent, full width (no max-width container). Do not add a header, footer, nav menu or any other elements to the page — everything (topbar, footer, sticky mobile bar, popup) is already inside the code.
5. Page settings – SEO title:
   - Landing: "Trusted Roofer in South Florida | Istueta Roofing"
   - Thank you: "Thank You | Istueta Roofing"

NON-NEGOTIABLE RULES
- Do NOT redesign, restyle, reorder, summarize or rewrite any copy. Do not change colors, fonts, spacing, icons or animations.
- Do NOT replace, re-upload or remove any image. All image URLs point to https://opshomedirective.github.io/istueta-roofing-funnel/assets/… and must stay exactly as they are.
- Keep the text {{custom_values.funnel__survey_code}} EXACTLY as written (it appears twice in the landing page: in the hero form card and in the exit popup). It is the GHL survey embed and is filled automatically by the custom value. Do not replace it with a native form element.
- Keep every phone link exactly as coded: tel:+17542272759, displayed as (754) 227-2759.
- Keep the <script> tags, including https://link.msgsndr.com/js/form_embed.js.
- No other custom values are used. Logo, photos, reviews, offers and texts are all hard-coded on purpose.

IF YOU CANNOT USE A CUSTOM HTML ELEMENT
Rebuild the landing page section by section with native elements, matching the live visual reference as closely as possible and in this exact order: topbar (logo + Google rating + red "CALL NOW (754) 227-2759" button) → hero (form first on mobile: eyebrow "SOUTH FLORIDA ROOFING COMPANY", headline "Looking for a Trusted Roofer in South Florida?", Google 4.8 ★ 319+ reviews badge, "$1,000 OFF" and "Roofs from $6,999" pills, form card "GET YOUR FREE ESTIMATE / ROOF INSPECTION INCLUDED" containing {{custom_values.funnel__survey_code}}, "Prefer to talk? Call (754) 227-2759") → 3 trust medallions → "Another happy Istueta client" auto-scrolling photo carousel → family/team section → 4-step "What happens after you submit" (dark) → 3 Google reviews → CTA banner over aerial photo → footer → sticky mobile bar (CALL + GET MY FREE ESTIMATE). Use the same image URLs, colors (#A8131A red, #16140F charcoal, #FAF7F4 cream, #D89B7A clay) and fonts (Cormorant Garamond for headlines, Inter for text).

IF YOU CANNOT OPEN URLS
Stop and tell me; I will paste the code of each file directly in the chat.

When finished, give me the preview link of both pages and confirm that: (a) the survey appears inside the hero form card, (b) the page is full width with no white margins on desktop or mobile, (c) the sticky "CALL / GET MY FREE ESTIMATE" bar appears on mobile after scrolling past the form.
```

## After AI Studio finishes (manual, in GHL)

1. **Survey** → in its settings, set the redirect on submit to the Thank You step.
2. **Survey custom CSS** → paste `form/survey.css`.
3. **Survey header** (first slide, HTML/Text element above the first field) → paste `form/form-header.html`.
4. **Survey footer / buttons HTML** → paste `form/form-footer.html`.
5. Custom value `funnel__survey_code` → the survey's embed code (iframe) of this sub-account.
