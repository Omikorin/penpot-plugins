import type { InsertEvent, PluginUIEvent } from '@/common/types';
import { getParentOrigin } from '@/ui/utils/messages';

const emit = (message: PluginUIEvent) => {
  const parentOrigin = getParentOrigin();
  parent.postMessage(message, parentOrigin ?? '*');
};

export const emitInsertQR = (content: Omit<InsertEvent['content'], 'name'>) => {
  emit({
    type: 'insert-qr',
    content: { ...content, name: 'New QR Code' },
  } as InsertEvent);
};
