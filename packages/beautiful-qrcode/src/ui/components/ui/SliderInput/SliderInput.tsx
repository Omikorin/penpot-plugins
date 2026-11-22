import { createUniqueId, type VoidComponent } from 'solid-js';
import { clamp } from '@/ui/utils/math';
import styles from './SliderInput.module.css';

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

export const SliderInput: VoidComponent<SliderInputProps> = (props) => {
  const id = createUniqueId();

  const commit = (raw: number) => {
    if (Number.isNaN(raw)) return;
    props.onChange(clamp(raw, props.min, props.max));
  };

  return (
    <div>
      <label for={id} class="body-s">
        {props.label}
      </label>
      <div class={styles.group}>
        <input
          id={id}
          type="range"
          min={props.min}
          max={props.max}
          step={props.step ?? 1}
          value={props.value}
          onInput={(e) => commit(e.currentTarget.valueAsNumber)}
        />
        <input
          type="number"
          class="input"
          aria-label={`${props.label} value`}
          min={props.min}
          max={props.max}
          step={props.step ?? 1}
          required
          value={props.value}
          onInput={(e) => commit(e.currentTarget.valueAsNumber)}
          onBlur={(e) => {
            e.currentTarget.value = String(props.value);
          }}
        />
      </div>
    </div>
  );
};
