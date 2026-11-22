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
import styles from './App.module.css';

const App: Component = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const [theme, setTheme] = createSignal(searchParams.get('theme') ?? 'light');

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
