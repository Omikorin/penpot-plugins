import type { PluginConfig, PluginUIEvent } from '@/common/types';
import { getParentOrigin } from '@/ui/utils/messages';

const emit = (message: PluginUIEvent) => {
  const parentOrigin = getParentOrigin();
  parent.postMessage(message, parentOrigin ?? '*');
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
