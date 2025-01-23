import { colors } from 'colors';
import { TrustedHTML } from 'https://jsr.io/@mary/jsx/0.1.0/lib/types.ts';
import { oklch } from './oklch.ts';

const fg = (l: number) => (l > 72.5 ? '#000' : '#fff');

const capitalize = (k: string) => k[0].toUpperCase() + k.slice(1);

export const ColorList = () => (
  <>
    <label for='inc-by'>Increment by</label>
    <select id='inc-by'>
      <option value='100' selected>
        100
      </option>
      <option value='50'>50</option>
      <option value='25'>25</option>
    </select>
    <label for='show-codes'>Show codes</label>
    <input id='show-codes' type='checkbox' />
    <ul>
      {Object.keys(colors).map(k => (
        <li>
          <div class='color-label'>{capitalize(k)}</div>
          <div class='types'>
            {['V', 'E', 'M'].map(p => (
              <ul>
                {Object.entries(
                  (colors as Record<string, typeof colors.red>)[k],
                )
                  .filter(([num]) => num.startsWith(p))
                  .map(([num, color]) => (
                    <li
                      style={`background:${oklch(color)};color:${fg(color.l)}`}
                      class={`color-${num.slice(-2)}`}
                    >
                      <span class='num'>{num}</span>
                      <span class='code'>{oklch(color)}</span>
                    </li>
                  ))}
              </ul>
            ))}
          </div>
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
