import { type Component, createSignal, onSettled } from 'solid-js';

import type { PluginEvent } from '@/common/types';
import {
  Appearance,
  Buttons,
  FileType,
  LogoControl,
  MarginControl,
  Preview,
  QRContent,
} from '@/ui/components/features';
import { Footer } from '@/ui/components/layout';
import { getInitialTheme } from '@/ui/utils/theme';

import styles from './App.module.css';

const App: Component = () => {
  const [theme, setTheme] = createSignal(getInitialTheme());

  function handleThemeChange(event: MessageEvent<PluginEvent>) {
    if (event.data.type === 'themechange') setTheme(event.data.content);
  }

  onSettled(() => {
    window.addEventListener('message', handleThemeChange);
    return () => window.removeEventListener('message', handleThemeChange);
  });

  return (
    <main data-theme={theme()} class={styles.main}>
      <Preview />
      <section class={styles.controls}>
        <QRContent />
        <MarginControl />
        <LogoControl />
        <Appearance />
        <FileType />
        <Buttons />
      </section>
      <Footer />
    </main>
  );
};

export default App;
