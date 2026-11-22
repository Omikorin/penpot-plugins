import type { Component } from 'solid-js';
import styles from './Footer.module.css';

export const Footer: Component = () => {
  return (
    <footer class={styles.footer}>
      <a
        href="https://omikor.in"
        target="_blank"
        rel="noopener noreferrer"
        class={styles.link}
      >
        Made with ❤️ by <span class={styles.accent}>Omikorin</span>
      </a>
    </footer>
  );
};
