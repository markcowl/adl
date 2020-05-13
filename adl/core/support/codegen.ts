export function quoteForIdentifier(value: string) {
  return /[^\w]/g.exec(value) ? `'${value.replace(/'/g, '\\\'')}'` : value.replace(/'/g, '\'');
}
