import type { PluginUIEvent } from '@/common/types';

const emit = (message: PluginUIEvent) => {
  parent.postMessage(message, '*');
};

export const emitCreateWave = (data: string) => {
  emit({
    type: 'create-pattern',
    content: {
      data,
      name: 'New Wave',
    },
  });
};
