import type { Component } from 'solid-js';
import type { SelectOption } from '@/ui/components/ui';
import { Accordion } from '@/ui/components/ui';
import { ElementControls } from '../ElementControls/ElementControls';
import styles from './Appearance.module.css';

const patternStyles: SelectOption<string>[] = [
  { value: 'square', label: 'Square' },
  { value: 'dots', label: 'Dots' },
  { value: 'rounded', label: 'Rounded' },
  { value: 'extra-rounded', label: 'Extra Rounded' },
  { value: 'classy', label: 'Classy' },
  { value: 'classy-rounded', label: 'Classy Rounded' },
];

const externalCornerStyles: SelectOption<string>[] = [
  { value: 'square', label: 'Square' },
  { value: 'dot', label: 'Dot' },
  { value: 'extra-rounded', label: 'Extra Rounded' },
];

const internalCornerStyles: SelectOption<string>[] = [
  { value: 'square', label: 'Square' },
  { value: 'dot', label: 'Dot' },
];

export const Appearance: Component = () => (
  <>
    <Accordion title="Background">
      <ElementControls type="background" />
    </Accordion>

    <Accordion title="Pattern">
      <ElementControls type="dots" styleOptions={patternStyles} />
    </Accordion>

    <Accordion title="Corners">
      <ElementControls
        type="cornersSquare"
        styleOptions={externalCornerStyles}
        styleLabel="External shape style"
        fillLabel="External shape fill"
        colorLabel="External shape color"
      />
      <hr class={styles.divider} />
      <ElementControls
        type="cornersDot"
        styleOptions={internalCornerStyles}
        styleLabel="Internal shape style"
        fillLabel="Internal shape fill"
        colorLabel="Internal shape color"
      />
    </Accordion>
  </>
);
