import type { Component } from 'solid-js';

import { wavePath } from '@/ui/stores/wave';
import { WAVE_COLOR, WAVE_HEIGHT, WAVE_WIDTH } from '@/ui/utils/wave';

import styles from './Preview.module.css';

export const Preview: Component = () => {
  return (
    <div>
      <svg
        viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
        aria-label="Wave preview"
        class={styles.preview}
      >
        <title>Wave preview</title>
        <path d={wavePath()} fill={WAVE_COLOR} />
      </svg>
    </div>
  );
};
