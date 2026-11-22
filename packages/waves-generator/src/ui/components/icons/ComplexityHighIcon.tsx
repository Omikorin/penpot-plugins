import type { JSX } from '@solidjs/web';
import type { VoidComponent } from 'solid-js';

export const ComplexityHighIcon: VoidComponent<JSX.IntrinsicElements['svg']> = (props) => (
  <svg width="20" height="20" viewBox="0 0 16 16" {...props}>
    <title>High complexity</title>
    <path
      d="M2 8C2 8 3 4 5 6C7 8 9 4 11 6C13 8 14 8 14 8"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </svg>
);
