import type { Component } from 'solid-js';
import { SliderInput } from '@/ui/components/ui';
import { qrState, setMargin } from '@/ui/stores/qr';

export const MarginControl: Component = () => (
  <SliderInput
    label="Margin"
    min={0}
    max={100}
    step={10}
    value={qrState.margin}
    onChange={setMargin}
  />
);
