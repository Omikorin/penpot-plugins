import type { Component } from 'solid-js';

import { downloadQR, insertQR } from '@/ui/services/qr';

import styles from './Buttons.module.css';

export const Buttons: Component = () => (
  <div class={styles.container}>
    <button type="button" aria-label="Add QR Code" data-appearance="primary" onClick={insertQR}>
      Add QR Code
    </button>
    <button
      type="button"
      aria-label="Download QR Code"
      data-appearance="secondary"
      onClick={downloadQR}
    >
      Download
    </button>
  </div>
);
