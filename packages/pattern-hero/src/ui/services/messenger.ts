import type { PluginConfig, PluginUIEvent } from '@/common/types';

const emit = (message: PluginUIEvent) => {
  parent.postMessage(message, '*');
};

export const emitCreatePattern = (config: PluginConfig) => {
  emit({
    type: 'create-pattern',
    content: {
      config,
      name: 'New Pattern',
    },
  });
};
