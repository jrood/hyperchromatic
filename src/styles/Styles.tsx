import { encodeBase64 } from 'jsr:@std/encoding/base64';
import { transform } from 'npm:lightningcss';
import { gradient } from './gradient.ts';
import { Colors } from '../types.ts';

const minify = (code: string) =>
  transform({
    filename: 'styles.css',
    code: new TextEncoder().encode(code),
    minify: true,
    sourceMap: false,
  }).code.toString();

const b64Figtree = () =>
  encodeBase64(Deno.readFileSync('src/styles/font/Figtree[wght].woff2'));

export const Styles = ({ colors }: { colors: Colors }) => (
  <style>
    /* This is a base64 encoding of the Figtree variable woff2 font. Figtree is
    available under the OFL-1.1 License
    https://github.com/erikdkennedy/figtree/blob/master/OFL.txt */
    {minify(`
      @font-face {
        font-family: Figtree;
        font-weight: 400 600;
        src: url('data:font/woff2;base64,${b64Figtree()}') format('woff2');
      }
      ${Deno.readTextFileSync('src/styles/styles.css')}
      .gradient { background: ${gradient(colors)};}
    `)}
  </style>
);
