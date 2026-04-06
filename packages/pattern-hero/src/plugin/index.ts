import type { PluginEvent, PluginUIEvent } from '@/common/types';
import { handleCreatePattern } from '@/plugin/pattern';

penpot.ui.open('Pattern Hero', `?theme=${penpot.theme}`, {
  width: 300,
  height: 450,
});

penpot.ui.onMessage<PluginUIEvent>((message) => {
  if (message.type === 'create-pattern') {
    handleCreatePattern(message.content);
  }
});

// Update the theme in the iframe
penpot.on('themechange', (theme) => {
  sendMessage({ type: 'theme', content: theme });
});

const sendMessage = (message: PluginEvent) => {
  penpot.ui.sendMessage(message);
};
