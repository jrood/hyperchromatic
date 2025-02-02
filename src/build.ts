import prettier from 'npm:prettier';
import { minify } from 'npm:html-minifier-terser';
import { page } from './page.tsx';
import { createColors } from './colors/createColors.ts';

const colors = createColors();

Deno.removeSync(`dist`, { recursive: true });
Deno.mkdirSync(`dist`);

const html = await minify(
  await prettier.format(page(colors), { parser: 'html', printWidth: 256 }),
  {
    removeAttributeQuotes: true,
    preserveLineBreaks: true,
  },
);

Deno.writeTextFileSync(
  'dist/index.html',
  html,
);

let sitemap = Deno.readTextFileSync('src/sitemap.xml');
sitemap = sitemap.replace('{{date}}', new Date().toISOString());
Deno.writeTextFileSync('dist/sitemap.xml', sitemap);
