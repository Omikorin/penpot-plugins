import type { Theme } from '@penpot/plugin-types';

export const isTheme = (value: string | null): value is Theme =>
  value === 'light' || value === 'dark';

/**
 * Penpot passes the theme in the iframe URL. Manifest v1 puts it in the query
 * string (`?theme=dark`), manifest v2 moves the whole query into the hash
 * (`#/?theme=dark`), so both places are checked.
 */
export const getInitialTheme = (): Theme => {
  const { search, hash } = window.location;
  const hashQuery = hash.includes('?') ? hash.slice(hash.indexOf('?')) : '';

  for (const query of [search, hashQuery]) {
    const theme = new URLSearchParams(query).get('theme');
    if (isTheme(theme)) return theme;
  }

  return 'light';
};
