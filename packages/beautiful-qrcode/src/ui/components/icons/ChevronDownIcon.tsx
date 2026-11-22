import type { JSX } from '@solidjs/web';
import type { VoidComponent } from 'solid-js';

export const ChevronDownIcon: VoidComponent<JSX.IntrinsicElements['svg']> = (
  props,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 16 16"
    fill="none"
    stroke-width="1"
    stroke="rgb(143, 157, 163)"
    {...props}
  >
    <title>Chevron down</title>
    <path d="m4 6 4 4 4-4" />
  </svg>
);
