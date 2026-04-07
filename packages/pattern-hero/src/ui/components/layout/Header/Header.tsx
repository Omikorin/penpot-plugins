import type { Component } from 'solid-js';
import { InfoIcon } from '@/ui/components/icons';
import styles from './Header.module.css';

export const Header: Component = () => {
  return (
    <header class={`${styles.header} body-m`}>
      <InfoIcon />
      Select one or more elements and configure below to create a pattern
    </header>
  );
};
