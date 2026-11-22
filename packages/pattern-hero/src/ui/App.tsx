import { type Component, createSignal, onSettled } from 'solid-js';

import type { PluginEvent } from '@/common/types';
import { Buttons, ConfigFields } from '@/ui/components/features';
import { Footer, Header } from '@/ui/components/layout';
import { isFromParent } from '@/ui/utils/messages';
import { getInitialTheme, isTheme } from '@/ui/utils/theme';

import styles from './App.module.css';

const App: Component = () => {
  const [theme, setTheme] = createSignal(getInitialTheme());

  function handleThemeChange(event: MessageEvent<PluginEvent>) {
    if (!isFromParent(event)) return;
    if (event.data?.type === 'theme' && isTheme(event.data.content)) {
      setTheme(event.data.content);
    }
  }

  onSettled(() => {
    window.addEventListener('message', handleThemeChange);
    return () => window.removeEventListener('message', handleThemeChange);
  });

  return (
    <main data-theme={theme()} class={styles.main}>
      <Header />
      <section class={styles.section}>
        <div class={styles.controls}>
          <ConfigFields />
        </div>
        <Buttons />
      </section>
      <Footer />
    </main>
  );
};

export default App;
