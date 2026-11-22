import type { JSX } from '@solidjs/web';
import type { VoidComponent } from 'solid-js';

export const WaveIcon: VoidComponent<JSX.IntrinsicElements['svg']> = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
    <title>Smooth wave</title>
    <path
      d="M0 8C2 8 2 4 4 4S6 12 8 12s2-4 4-4 2 4 4 4"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </svg>
);
