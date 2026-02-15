import Alpine from 'alpinejs';
import type { PluginConfig } from './types';

export const initializeStore = () => {
  Alpine.store('config', {
    rows: 10,
    columns: 10,
    padding: 30,
    repeat: true,
    shuffle: false,
    group: true,
  } as PluginConfig);
};
