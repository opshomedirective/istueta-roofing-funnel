// Genera las versiones listas para GHL a partir de las páginas de vista previa:
//   index.html     → ghl/funnel.html      (el survey ya va embebido directo)
//   thank-you.html → ghl/thank-you.html
// Las imágenes pasan de rutas relativas (assets/…) a URLs absolutas de GitHub Pages,
// así el HTML funciona pegado en cualquier lado.
// Uso (desde esta carpeta):  node build.js
const fs = require('fs');
const path = require('path');

const ASSET_BASE = 'https://opshomedirective.github.io/istueta-roofing-funnel/assets/';

const PAGES = [
  { src: 'index.html', out: 'ghl/funnel.html', survey: true },
  { src: 'thank-you.html', out: 'ghl/thank-you.html', survey: false },
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

function build(p) {
  let s = fs.readFileSync(path.join(__dirname, p.src), 'utf8');

  // 1) Quitar el comentario de documentación del <head>
  s = s.replace(/<!--\s*\n[\s\S]*?-->\n/, '');

  // 3) Imágenes: relativas → absolutas (src="assets/…" y url('assets/…'))
  s = s.split('"assets/').join('"' + ASSET_BASE);
  s = s.split("'assets/").join("'" + ASSET_BASE);

  // 4) Overrides de contenedor GHL
  s = s.replace('</head>', ghlOverrides);


  fs.mkdirSync(path.join(__dirname, 'ghl'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, p.out), s);
  const left = (s.match(/["'(]assets\//g) || []).length;
  console.log('OK -> ' + p.out + ' (' + s.length + ' bytes, rutas relativas restantes: ' + left + ')');
}

PAGES.forEach(build);
