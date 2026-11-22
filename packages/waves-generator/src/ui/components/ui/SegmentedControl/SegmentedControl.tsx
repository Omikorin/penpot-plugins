import { type Component, For } from 'solid-js';

import styles from './SegmentedControl.module.css';

export interface SegmentedOption<T extends string> {
  value: T;
  label: string;
  icon: Component;
}

interface SegmentedControlProps<T extends string> {
  label: string;
  value: T;
  options: readonly SegmentedOption<T>[];
  onChange: (value: T) => void;
  compact?: boolean;
}

export const SegmentedControl = <T extends string>(props: SegmentedControlProps<T>) => (
  <fieldset class={styles.nav}>
    <legend class="input-label-hidden">{props.label}</legend>
    <ul class={styles.list}>
      <For each={props.options}>
        {(option) => (
          <li>
            <button
              type="button"
              aria-pressed={props.value === option.value ? 'true' : 'false'}
              aria-label={option.label}
              title={option.label}
              class={[
                styles.tab,
                {
                  [styles.active]: props.value === option.value,
                  [styles.compact]: props.compact,
                },
              ]}
              onClick={() => props.onChange(option.value)}
            >
              <option.icon />
            </button>
          </li>
        )}
      </For>
    </ul>
  </fieldset>
);
