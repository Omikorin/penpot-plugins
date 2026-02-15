import Alpine from 'alpinejs';
import './assets/main.css';
import { createPattern } from './common/actions';
import { initializeStore } from './common/store';
import type { PluginEvent } from './common/types';
import { numberInput } from './components/number-input';
import { switchComponent } from './components/switch';

document.addEventListener('alpine:init', () => {
  Alpine.data('numberInput', numberInput);
  Alpine.data('switchComponent', switchComponent);

  Alpine.data('patternHero', () => ({
    createPattern,
  }));
});

window.Alpine = Alpine;

initializeStore();
Alpine.start();

// theme handling
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get('theme') ?? 'light';

// listen plugin.ts messages
window.addEventListener('message', (event: MessageEvent<PluginEvent>) => {
  if (event.data.type === 'themechange') {
    document.body.dataset.theme = event.data.content;
  }
});

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}
