import { createUniqueId, For, type VoidComponent } from 'solid-js';
import styles from './Select.module.css';

export interface SelectOption<T extends string> {
  value: T;
  label: string;
}

interface SelectProps<T extends string> {
  label: string;
  value: T;
  options: readonly SelectOption<T>[];
  onChange: (value: T) => void;
}

export const Select = <T extends string>(
  props: SelectProps<T>,
): ReturnType<VoidComponent> => {
  const id = createUniqueId();

  return (
    <div class={styles.group}>
      <label for={id} class="body-s">
        {props.label}
      </label>
      <select
        id={id}
        class="select"
        value={props.value}
        onChange={(e) => props.onChange(e.currentTarget.value as T)}
      >
        <For each={props.options}>
          {(option) => <option value={option.value}>{option.label}</option>}
        </For>
      </select>
    </div>
  );
};
