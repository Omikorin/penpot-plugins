import type { Component } from 'solid-js';
import { InfoIcon } from '@/assets/icons';

export const Header: Component = () => {
  return (
    <header class="body-m">
      <InfoIcon />
      Select one or more elements and configure below to create a pattern
    </header>
  );
};
