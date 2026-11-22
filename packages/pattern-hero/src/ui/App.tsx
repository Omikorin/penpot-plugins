import { type Component, createSignal, onSettled } from 'solid-js';

import type { PluginEvent } from '@/common/types';
import { Buttons, ConfigFields } from '@/ui/components/features';
import { Footer, Header } from '@/ui/components/layout';
import { getInitialTheme } from '@/ui/utils/theme';

import styles from './App.module.css';

const App: Component = () => {
  const [theme, setTheme] = createSignal(getInitialTheme());

  function handleThemeChange(event: MessageEvent<PluginEvent>) {
    if (event.data.type === 'theme') setTheme(event.data.content);
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
