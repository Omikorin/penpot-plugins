import type { PluginEvent, PluginUIEvent } from '@/common/types';
import { handleInsertQR } from '@/plugin/insert';

penpot.ui.open('Beautiful QR Code', `?theme=${penpot.theme}`, {
  width: 285,
  height: 770,
});

penpot.ui.onMessage<PluginUIEvent>(async (message) => {
  if (message.type === 'insert-qr') {
    await handleInsertQR(message.content);
  }
});

// Update the theme in the iframe
penpot.on('themechange', (theme) => {
  sendMessage({ type: 'themechange', content: theme });
});

const sendMessage = (message: PluginEvent) => {
  penpot.ui.sendMessage(message);
};
