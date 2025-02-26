import { TrustedHTML } from 'https://jsr.io/@mary/jsx/0.1.0/lib/types.ts';
import { oklch } from './oklch.ts';
import { Colors } from './types.ts';
import { capitalize } from './capitalize.ts';

const fg = (n: number) => (n < 500 ? '#000' : '#fff');

export const ColorList = ({ colors }: { colors: Colors }) => (
  <>
    <h2>Colors</h2>
    <label for='inc-by'>Precision</label>
    <select id='inc-by'>
      <option value='100' selected>
        100
      </option>
      <option value='50'>50</option>
      <option value='25'>25</option>
    </select>
    <ul>
      {Object.keys(colors).map(h => (
        <li>
          <h3>{capitalize(h)}</h3>
          <ul>
            {Object.entries(
              (colors as Record<string, typeof colors.red>)[h],
            ).map(([num, color]) => (
              <li
                style={`background:var(--${h}-${num});color:${fg(+num)}`}
                class={`color-${num.slice(-2)}${(colors[h][+num - 25]?.c < color.c && colors[h][+num + 25]?.c < color.c) ? ' peak' : ''}`}
              >
                <span class='num'>{num}</span>
                <span class='code'>{oklch(color)}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    <script>
      {
        new TrustedHTML(
          `const s = document.querySelector('select');const fn = () => s.setAttribute('value',s.value);s.onchange = fn;fn()`,
        )
      }
    </script>
  </>
);
