export function pad(html) {
  return html.split(/\r?\n/).map(line => `  ${line}`).join('\n');
}
