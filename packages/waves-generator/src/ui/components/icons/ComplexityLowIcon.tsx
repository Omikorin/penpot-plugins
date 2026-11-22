import type { JSX } from '@solidjs/web';
import type { VoidComponent } from 'solid-js';

export const ComplexityLowIcon: VoidComponent<JSX.IntrinsicElements['svg']> = (props) => (
  <svg width="20" height="20" viewBox="0 0 16 16" {...props}>
    <title>Low complexity</title>
    <path
      d="M2 8C2 8 4 6 8 8C12 10 14 8 14 8"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </svg>
);
