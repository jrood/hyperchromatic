import { minify } from 'npm:html-minifier-terser';
import { distDirInit } from '../distDirInit.ts';
import { page } from './page.tsx';

distDirInit('web');

Deno.writeTextFileSync(
  'dist/web/index.html',
  await minify(page(), { removeAttributeQuotes: true }),
);
