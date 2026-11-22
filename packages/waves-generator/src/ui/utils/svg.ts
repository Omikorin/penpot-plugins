import { WAVE_COLOR, WAVE_HEIGHT, WAVE_WIDTH } from './wave';

export const createSvgMarkup = (path: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}"><path d="${path}" fill="${WAVE_COLOR}"/></svg>`;
