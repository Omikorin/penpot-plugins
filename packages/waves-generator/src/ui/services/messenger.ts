import type { PluginUIEvent } from '@/common/types';
import { getParentOrigin } from '@/ui/utils/messages';

const emit = (message: PluginUIEvent) => {
  const parentOrigin = getParentOrigin();
  parent.postMessage(message, parentOrigin ?? '*');
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
