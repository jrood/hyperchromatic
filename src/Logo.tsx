import { oklch } from './oklch.ts';
import { Colors } from './types.ts';

export const Logo = ({ colors }: { colors: Colors }) => (
  <div class='logo'>
    <div style={`background: ${oklch(colors.red[500])}`} />
    <div style={`background: ${oklch(colors.orange[400])}`} />
    <div style={`background: ${oklch(colors.yellow[300])}`} />
    <div style={`background: ${oklch(colors.green[500])}`} />
    <div style={`background: ${oklch(colors.blue[600])}`} />
    <div style={`background: ${oklch(colors.purple[600])}`} />
    <div style={`background: ${oklch(colors.pink[500])}`} />
    <div style={`background: ${oklch(colors.gray[500])}`} />
  </div>
);