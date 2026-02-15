import Alpine from 'alpinejs';
import type { PluginUIEvent } from './types';

const sendMessage = (message: PluginUIEvent) => {
  parent.postMessage(message, '*');
};

export const createPattern = () => {
  sendMessage({
    type: 'create-pattern',
    content: {
      // Ensure config is serializable by removing proxy
      config: JSON.parse(JSON.stringify(Alpine.store('config'))),
      name: 'New Pattern',
    },
  });
};
