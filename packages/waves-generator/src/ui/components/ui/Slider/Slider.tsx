import type { JSX } from '@solidjs/web';
import type { VoidComponent } from 'solid-js';
import styles from './Slider.module.css';

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onInput: (value: number) => void;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export const Slider: VoidComponent<SliderProps> = (props) => (
  <div class={styles.container}>
    {props.startIcon}
    <input
      type="range"
      class={styles.range}
      aria-label={props.label}
      min={props.min}
      max={props.max}
      value={props.value}
      onInput={(e) => props.onInput(e.currentTarget.valueAsNumber)}
    />
    {props.endIcon}
  </div>
);
