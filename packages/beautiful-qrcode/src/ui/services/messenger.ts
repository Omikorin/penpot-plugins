import type { InsertEvent, PluginUIEvent } from '@/common/types';

const emit = (message: PluginUIEvent) => {
  parent.postMessage(message, '*');
};

export const emitInsertQR = (content: Omit<InsertEvent['content'], 'name'>) => {
  emit({
    type: 'insert-qr',
    content: { ...content, name: 'New QR Code' },
  } as InsertEvent);
};
