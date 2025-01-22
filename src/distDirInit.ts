export function distDirInit(name: string) {
  try {
    Deno.mkdirSync('dist');
  } catch {}
  try {
    Deno.removeSync(`dist/${name}`, { recursive: true });
  } catch {}
  Deno.mkdirSync(`dist/${name}`);
}
