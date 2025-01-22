import { minify } from 'npm:html-minifier-terser';

import { colors } from 'colors';
import { distDirInit } from '../distDirInit.ts';
import { page } from './page.tsx';
distDirInit('web');

console.log(colors);

Deno.writeTextFileSync(
  'dist/web/web.html',
  await minify(page(), { removeAttributeQuotes: true}),
);
