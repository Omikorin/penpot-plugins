import type { JSX } from '@solidjs/web';
import type { VoidComponent } from 'solid-js';

export const ChevronUpIcon: VoidComponent<JSX.IntrinsicElements['svg']> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <title>Up</title>
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);
