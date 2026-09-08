import fs from 'node:fs';

const cssPath = 'app/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');
css = css
  .replace("@import 'tw-animate-css';\n", '')
  .replace("@import 'shadcn/tailwind.css';\n", '');
fs.writeFileSync(cssPath, css);
