import { Colors } from './types.ts';
import { ColorList } from './ColorList.tsx';
import { Styles } from './styles/Styles.tsx';
import { oklch } from './oklch.ts';
import { Logo } from './Logo.tsx';
import { cssVars } from './cssVars.tsx';
import { description } from './description.ts';

export const page = (colors: Colors) =>
  '<!doctype html>' +
  (
    <html lang='en'>
      <head>
        <title>Hyperchromatic</title>
        <meta name='description' content={description} />
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='data:' />
        <style>{cssVars(colors)}</style>
        <Styles />
      </head>
      <body>
        <header style={`background:${oklch(colors.gray[50])}`}>
          <hgroup>
            <Logo colors={colors} />
            <h1>Hyperchromatic</h1>
            <p>{description}</p>
          </hgroup>
        </header>
        <main>
          <h2>
            An{' '}
            <a href='https://github.com/jrood/hyperchromatic'>
              open source
            </a>{' '}
            P3/OKLCH color palette
          </h2>
          <p>
            Hex and rgb colors on the web are limited to the sRGB range of
            colors supported by older displays. Hyperchromatic is an open source
            palette using{' '}
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch'>
              OKLCH
            </a>{' '}
            for colors in the wider P3 range that modern displays support.
          </p>

          <ColorList colors={colors} />
        </main>
        <footer>
          Created by <a href='https://github.com/jrood'>John Rood</a>
        </footer>
      </body>
    </html>
  ).value;
