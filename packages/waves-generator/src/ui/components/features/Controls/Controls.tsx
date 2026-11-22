import type { Component } from 'solid-js';

import type { CurveType, DirectionType } from '@/common/types';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ComplexityHighIcon,
  ComplexityLowIcon,
  PeakIcon,
  RandomizeIcon,
  StepIcon,
  WaveIcon,
} from '@/ui/components/icons';
import { SegmentedControl, type SegmentedOption, Slider } from '@/ui/components/ui';
import { randomize, setComplexity, setCurve, setDirection, wave } from '@/ui/stores/wave';

import styles from './Controls.module.css';

const curveOptions: SegmentedOption<CurveType>[] = [
  { value: 'wave', label: 'Smooth', icon: WaveIcon },
  { value: 'step', label: 'Stepped', icon: StepIcon },
  { value: 'peak', label: 'Peaked', icon: PeakIcon },
];

const directionOptions: SegmentedOption<DirectionType>[] = [
  { value: 'up', label: 'Up', icon: ChevronUpIcon },
  { value: 'down', label: 'Down', icon: ChevronDownIcon },
];

export const Controls: Component = () => (
  <div class={styles.controls}>
    <SegmentedControl
      label="Wave type"
      options={curveOptions}
      value={wave.curve}
      onChange={setCurve}
    />
    <SegmentedControl
      compact
      label="Direction"
      options={directionOptions}
      value={wave.direction}
      onChange={setDirection}
    />
    <Slider
      label="Complexity"
      min={2}
      max={50}
      value={wave.complexity}
      onInput={setComplexity}
      startIcon={<ComplexityLowIcon />}
      endIcon={<ComplexityHighIcon />}
    />
    <button type="button" class={styles.randomize} aria-label="Randomize waves" onClick={randomize}>
      <RandomizeIcon />
    </button>
  </div>
);
