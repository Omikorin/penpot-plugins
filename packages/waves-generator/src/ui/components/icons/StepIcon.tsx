import type { JSX } from '@solidjs/web';
import type { VoidComponent } from 'solid-js';

export const StepIcon: VoidComponent<JSX.IntrinsicElements['svg']> = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
    <title>Stepped wave</title>
    <path d="M0 8H4V4H8V8H12V4H16" stroke="currentColor" fill="none" stroke-width="1.5" />
  </svg>
);
