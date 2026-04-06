import { type Component, createSignal, onCleanup, onMount } from 'solid-js';
import type { PluginEvent } from '@/common/types';
import { Buttons, ConfigFields } from '@/ui/components/features';
import { Footer, Header } from '@/ui/components/layout';

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
    <main data-theme={theme()}>
      <Header />
      <section>
        <div class="controls">
          <ConfigFields />
        </div>
        <Buttons />
      </section>
      <Footer />
    </main>
  );
};

export default App;
