import { Colors } from './types.ts';
import { ColorList } from './ColorList.tsx';
import { Styles } from './styles/Styles.tsx';

export const description = 'vibrant colors for the web';

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
        <Styles colors={colors} />
      </head>
      <body>
        <div class='gradient' />
        <header>
          <hgroup>
            <h1>Hyperchromatic</h1>
            <p>{description}</p>
          </hgroup>
        </header>
        <main>
          <p>
            Hyperchromatic is an open source palette using colors in the P3
            gamut via OKLCH.
          </p>
          <div class='flex-p'>
            <div>
              <h2>What's the P3 gamut?</h2>
              <p>
                A "gamut" is a range of colors that a display can show, and P3
                is a gamut supported by many modern displays, while older
                displays only support the smaller sRGB space.
              </p>
            </div>
            <div>
              <h2>What's OKLCH?</h2>
              <p>
                OKLCH can be used in CSS to specify colors using lightness,
                chroma, and hue. These colors might fall in sRGB, P3, or
                even wider spaces. Colors defined in CSS using hex or rgb are
                limited to the sRGB space.
              </p>
            </div>
          </div>

          <ColorList colors={colors} />
          {/* <h2>How will these colors look on displays that don't support P3?</h2>
          <input id='show-fallbacks' type='checkbox' />
          <label for='show-fallbacks'>Show sRGB fallbacks</label>
          <h2>The math</h2> */}
        </main>
        <footer>
          Created by <a href='https://github.com/jrood'>John Rood</a>
        </footer>
      </body>
    </html>
  ).value;
