import { minify } from 'npm:html-minifier-terser';
import { page } from './page.tsx';
import { createColors } from './colors/createColors.ts';

const colors = createColors();

Deno.removeSync(`dist`, { recursive: true });
Deno.mkdirSync(`dist`);

Deno.writeTextFileSync(
  'dist/index.html',
  await minify(page(colors), { removeAttributeQuotes: true }),
);

let sitemap = Deno.readTextFileSync('src/sitemap.xml');
sitemap = sitemap.replace('{{date}}', new Date().toISOString());
Deno.writeTextFileSync('dist/sitemap.xml', sitemap);
