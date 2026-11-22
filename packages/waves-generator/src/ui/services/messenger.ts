import type { PluginUIEvent } from '@/common/types';
import { getParentOrigin } from '@/ui/utils/messages';

const emit = (message: PluginUIEvent) => {
  const parentOrigin = getParentOrigin();

  if (!parentOrigin) {
    console.error('Unable to determine the Penpot parent origin');
    return;
  }

  parent.postMessage(message, parentOrigin);
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
