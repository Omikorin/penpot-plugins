import type { PluginEvent, PluginUIEvent } from '@/common/types';
import { handleCreatePattern } from '@/plugin/pattern';

penpot.ui.open('Waves Generator', `?theme=${penpot.theme}`, {
  width: 670,
  height: 500,
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
