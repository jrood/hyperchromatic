import { colors } from 'colors';
import { TrustedHTML } from 'https://jsr.io/@mary/jsx/0.1.0/lib/types.ts';

const fg = (color: string) =>
  +color.split('(')[1].split('%')[0] > 70 ? '#000' : '#fff';

const capitalize = (k: string) => k[0].toUpperCase() + k.slice(1);

export const ColorList = () => (
  <>
    <select>
      <option value='100' selected>
        100
      </option>
      <option value='50'>50</option>
      <option value='25'>25</option>
    </select>
    <ul>
      {Object.keys(colors).map(k => (
        <li>
          <div class='color-label'>{capitalize(k)}</div>
          <ul>
            {Object.entries(
              (colors as Record<string, typeof colors.red>)[k],
            ).map(([num, color]) => (
              <li
                style={`background:${color};color:${fg(color)}`}
                class={`color-${+num % 100}`}
              >
                <span class='num'>{num}</span>
                {color}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    <script>{new TrustedHTML(`const s = document.querySelector('select');const fn = () => s.setAttribute('value',s.value);s.onchange = fn;fn()`)}</script>
  </>
);
