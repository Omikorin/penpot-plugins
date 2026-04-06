import { For } from 'solid-js';
import { NumberInput, Toggle } from '@/ui/components/ui';
import { config, handleInput, settingsManifest } from '@/ui/stores/config';

export const ConfigFields = () => {
  return (
    <>
      <For each={settingsManifest.numbers}>
        {(item) => (
          <div class="form-group">
            <NumberInput
              value={config[item.key as keyof typeof config] as number}
              onInput={(val) => handleInput(item.key, val)}
            >
              <item.icon /> {item.label}
            </NumberInput>
          </div>
        )}
      </For>

      <For each={settingsManifest.toggles}>
        {(item) => (
          <div class="form-group">
            <Toggle
              checked={config[item.key as keyof typeof config] as boolean}
              onChange={(val) => handleInput(item.key, val)}
            >
              <item.icon /> {item.label}
            </Toggle>
          </div>
        )}
      </For>
    </>
  );
};
