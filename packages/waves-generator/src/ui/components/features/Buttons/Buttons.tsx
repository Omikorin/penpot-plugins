import type { Component } from 'solid-js';

import { handleDownload, handleSubmit } from '@/ui/stores/wave';

import styles from './Buttons.module.css';

export const Buttons: Component = () => {
  return (
    <div class={styles.container}>
      <button type="button" data-appearance="secondary" onClick={handleDownload}>
        Download
      </button>
      <button type="button" data-appearance="primary" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};
