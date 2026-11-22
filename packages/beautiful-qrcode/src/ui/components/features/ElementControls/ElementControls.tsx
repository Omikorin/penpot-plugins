import { type Component, createUniqueId, Show } from 'solid-js';
import type { ElementType, FillType } from '@/common/types';
import { Select, type SelectOption, SliderInput } from '@/ui/components/ui';
import {
  qrState,
  setElementColor,
  setElementFill,
  setElementRotation,
  setElementStyle,
} from '@/ui/stores/qr';
import styles from './ElementControls.module.css';

const fillOptions: SelectOption<FillType>[] = [
  { value: 'single', label: 'Single Color' },
  { value: 'linear', label: 'Linear Gradient' },
  { value: 'radial', label: 'Radial Gradient' },
];

interface ElementControlsProps {
  type: ElementType;
  styleOptions?: SelectOption<string>[];
  styleLabel?: string;
  fillLabel?: string;
  colorLabel?: string;
}

export const ElementControls: Component<ElementControlsProps> = (props) => {
  const colorId = createUniqueId();
  const element = () => qrState.elements[props.type];

  return (
    <div class={styles.controls}>
      <Show when={props.styleOptions}>
        {(options) => (
          <Select
            label={props.styleLabel ?? 'Style'}
            options={options()}
            value={element().style ?? 'square'}
            onChange={(style) => setElementStyle(props.type, style)}
          />
        )}
      </Show>

      <Select
        label={props.fillLabel ?? 'Fill'}
        options={fillOptions}
        value={element().fill}
        onChange={(fill) => setElementFill(props.type, fill)}
      />

      <div class={styles.colorRow}>
        <label for={colorId} class="body-s">
          {props.colorLabel ?? 'Color'}
        </label>
        <div class={styles.pickers}>
          <input
            id={colorId}
            type="color"
            class={styles.picker}
            value={element().color}
            onInput={(e) => setElementColor(props.type, e.currentTarget.value)}
          />
          <Show when={element().fill !== 'single'}>
            <input
              type="color"
              class={styles.picker}
              aria-label="Gradient second color"
              value={element().colorSecondary ?? '#ffffff'}
              onInput={(e) =>
                setElementColor(props.type, e.currentTarget.value, true)
              }
            />
          </Show>
        </div>
      </div>

      <Show when={element().fill === 'linear'}>
        <SliderInput
          label="Rotation"
          min={0}
          max={360}
          value={element().rotation ?? 0}
          onChange={(rotation) => setElementRotation(props.type, rotation)}
        />
      </Show>
    </div>
  );
};
