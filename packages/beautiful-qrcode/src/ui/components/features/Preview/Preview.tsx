import { type Component, createEffect } from 'solid-js';
import { qr } from '@/ui/services/qr';
import { qrState } from '@/ui/stores/qr';
import { buildOptions } from '@/ui/utils/options';
import styles from './Preview.module.css';

export const Preview: Component = () => {
  let container!: HTMLDivElement;

  createEffect(
    () => buildOptions(qrState),
    (options) => {
      // coalesce rapid changes (e.g. dragging a slider) into a single redraw
      const frame = requestAnimationFrame(() => qr.update(options));
      return () => cancelAnimationFrame(frame);
    },
  );

  return (
    <div class={styles.section}>
      <div
        ref={(el) => {
          container = el;
          qr.append(container);
        }}
        class={styles.preview}
        role="img"
        aria-label="QR code preview"
      />
    </div>
  );
};
