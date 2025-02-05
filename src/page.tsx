import { Colors } from './types.ts';
import { ColorList } from './ColorList.tsx';
import { Styles } from './styles/Styles.tsx';
import { oklch } from './oklch.ts';

export const description = 'vibrant colors for the web';

const Logo = ({ colors }: { colors: Colors }) => (
  <div class='logo'>
    <div style={`background: ${oklch(colors.red[500])}`} />
    <div style={`background: ${oklch(colors.orange[400])}`} />
    <div style={`background: ${oklch(colors.yellow[300])}`} />
    <div style={`background: ${oklch(colors.green[500])}`} />
    <div style={`background: ${oklch(colors.blue[600])}`} />
    <div style={`background: ${oklch(colors.indigo[700])}`} />
    <div style={`background: ${oklch(colors.purple[600])}`} />
    <div style={`background: ${oklch(colors.gray[500])}`} />
  </div>
);

export const page = (colors: Colors) =>
  '<!doctype html>' +
  (
    <html lang='en'>
      <head>
        <title>Hyperchromatic</title>
        <meta name={description} content={description} />
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='data:' />
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
          <h2>An open source P3/OKLCH color palette</h2>
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
