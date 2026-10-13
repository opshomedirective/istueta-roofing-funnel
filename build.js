// Genera las versiones listas para pegar en GHL (elemento Custom HTML):
//   index.html     → ghl/funnel.html
//   thank-you.html → ghl/thank-you.html
//
// Recursos:
//   · Logo  → {{custom_values.funnel__company_logo}}  (único custom value)
//   · Fotos → links del Media Library de GHL definidos en ghl-assets.json.
//             Si una foto aún no tiene link, se usa su copia en GitHub Pages.
//   · Survey → va embebido directo (iframe rm2ZsHLrR9CpR3M7TmKk), sin custom value.
//
// Uso (desde esta carpeta):  node build.js
const fs = require('fs');
const path = require('path');

const LOGO_CV = '{{custom_values.funnel__company_logo}}';
const FALLBACK_BASE = 'https://opshomedirective.github.io/istueta-roofing-funnel/assets/';
const ghlLinks = JSON.parse(fs.readFileSync(path.join(__dirname, 'ghl-assets.json'), 'utf8'));

const PAGES = [
  { src: 'index.html', out: 'ghl/funnel.html' },
  { src: 'thank-you.html', out: 'ghl/thank-you.html' },
];

const ghlOverrides = `<style>
    html,body{max-width:100%!important;overflow-x:hidden!important;background:#fff!important}
    .hl-page,.hl-page-creator--container,.hl_page-creator--container,[class*="hl-page"],
    #preview-container,#preview-container>div,.inner-container,.section_wrapper,
    .elHTMLBlock,.elCustomHtml,[data-page-element="HtmlBlock/V1"]{
      max-width:100%!important;width:100%!important;padding:0!important;margin:0!important;background:transparent!important
    }
  </style>
</head>`;

const pending = new Set();

function assetUrl(file) {
  if (file === 'logo-white.webp') return LOGO_CV;
  const link = (ghlLinks[file] || '').trim();
  if (link) return link;
  pending.add(file);
  return FALLBACK_BASE + file;
}

function build(p) {
  let s = fs.readFileSync(path.join(__dirname, p.src), 'utf8');

  // 1) Quitar el comentario de documentación del <head>
  s = s.replace(/<!--\s*\n[\s\S]*?-->\n/, '');

  // 2) Recursos: assets/xxx → custom value (logo) o link de GHL (fotos)
  s = s.replace(/(["'])assets\/([\w.-]+)/g, (_, q, file) => q + assetUrl(file));

  // 3) Overrides de contenedor GHL
  s = s.replace('</head>', ghlOverrides);

  fs.mkdirSync(path.join(__dirname, 'ghl'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, p.out), s);
  console.log('OK -> ' + p.out + ' (' + s.length + ' bytes)');
}

PAGES.forEach(build);
if (pending.size) console.log('Fotos aún sin link de GHL (usan GitHub Pages): ' + [...pending].join(', '));
else console.log('Todas las fotos usan links de GHL.');
