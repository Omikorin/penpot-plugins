import { type Component, createSignal, onCleanup, onMount } from 'solid-js';
import type { PluginEvent } from '@/common/types';
import { Buttons, Controls, Preview } from '@/ui/components/features';
import { Footer, Header } from '@/ui/components/layout';
import styles from './App.module.css';

const App: Component = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const initialTheme = searchParams.get('theme') ?? 'light';

  const [theme, setTheme] = createSignal(initialTheme);

  function handleThemeChange(event: MessageEvent<PluginEvent>) {
    if (event.data.type === 'theme') setTheme(event.data.content);
  }

  onMount(() => {
    window.addEventListener('message', handleThemeChange);
  });

  onCleanup(() => {
    window.removeEventListener('message', handleThemeChange);
  });

  return (
    <main data-theme={theme()} class={styles.main}>
      <Header />
      <section class={styles.section}>
        <Controls />
        <Preview />
        <Buttons />
      </section>
      <Footer />
    </main>
  );
};

export default App;
