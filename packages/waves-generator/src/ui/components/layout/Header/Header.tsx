import type { Component } from 'solid-js';

import styles from './Header.module.css';

export const Header: Component = () => {
  return (
    <header class={styles.header}>
      <img width="60" height="60" src="/icon.svg" alt="Waves Generator logo" />
      <span class="title-l">Let's make a wave!</span>
    </header>
  );
};
