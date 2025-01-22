import { ColorList } from './ColorList.tsx';
import { Styles } from './styles/Styles.tsx';

export const description = 'vibrant colors for modern displays';

export const page = () =>
  '<!doctype html>' +
  (
    <html lang='en'>
      <head>
        <title>Hyperchromatic</title>
        <meta
          name={description}
          content='An open source P3 OKLCH color palette'
        />
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='data:' />
        <Styles />
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
            Hyperchromatic is an open source color palette using OKLCH colors in
            the P3 color space.
          </p>
          <h2>What's P3?</h2>
          <p>
            P3 is a "color space" or range of colors that a display can show.
            Many modern displays support P3 but older displays only support the
            smaller sRGB space. Colors in CSS using hex or rgb are limited to
            the sRGB space.
          </p>
          <h2>What's OKLCH?</h2>
          <p>
            OKLCH can be used in CSS to specify colors using lightness, chroma,
            and hue. These colors might fall in sRGB, P3, or even wider spaces.
          </p>
          <h2>What makes this palette useful?</h2>
          <p>
            With OKLCH, it is easy to accidentally choose colors that are beyond
            P3. When trying to use vivid colors, a certain lightness and chroma
            may be within P3 range for one hue but out of P3 range for a
            different hue. This can cause colors to look non-uniform or diplay
            differently than intended.
          </p>
          <p>
            This palette provides a curated selection of OKLCH colors that
            use the P3 space without going beyond it. The shades of
            lightness follow curves that are calibrated for each hue in order to
            include vivid colors without sacrificing uniformity of lightness
            between hues.
          </p>
          <ColorList />
          {/* <h2>How will these colors look on displays that don't support P3?</h2>
          <input id='show-fallbacks' type='checkbox' />
          <label for='show-fallbacks'>Show sRGB fallbacks</label>
          <h2>The math</h2> */}
        </main>
      </body>
    </html>
  ).value;
