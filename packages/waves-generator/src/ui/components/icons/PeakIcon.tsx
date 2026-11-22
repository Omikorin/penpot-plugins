import type { JSX } from '@solidjs/web';
import type { VoidComponent } from 'solid-js';

export const PeakIcon: VoidComponent<JSX.IntrinsicElements['svg']> = (
  props,
) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
    <title>Peaked wave</title>
    <path
      d="M0 8L4 4L8 12L12 4L16 8"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </svg>
);
