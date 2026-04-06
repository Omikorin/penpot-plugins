import type { JSX, VoidComponent } from 'solid-js';

export const PaddingIcon: VoidComponent<JSX.IntrinsicElements['svg']> = (
  props,
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      stroke-width="1.33px"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <title>Padding icon</title>
      <path d="M.667 2h.666a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H.667M15.333 2h-.666a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h.666m-8-8.667v5.334a.667.667 0 0 0 1.334 0V5.333a.667.667 0 0 0-1.334 0z"></path>
    </svg>
  );
};
