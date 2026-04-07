import type { Component } from 'solid-js';
import { handleSubmit } from '@/ui/stores/config';
import styles from './Buttons.module.css';

export const Buttons: Component = () => {
  return (
    <div class={styles.container}>
      <button
        type="button"
        id="btn-create"
        class={styles.primaryButton}
        data-appearance="primary"
        onClick={() => handleSubmit()}
      >
        Create
      </button>
    </div>
  );
};
