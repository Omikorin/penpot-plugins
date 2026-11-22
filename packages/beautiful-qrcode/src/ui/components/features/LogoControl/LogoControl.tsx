import { type Component, Show } from 'solid-js';

import { TrashIcon, UploadIcon } from '@/ui/components/icons';
import { SliderInput } from '@/ui/components/ui';
import { readFileAsDataURL } from '@/ui/services/qr';
import { qrState, removeLogo, setLogo, setLogoMargin } from '@/ui/stores/qr';

import styles from './LogoControl.module.css';

const MAX_FILENAME_LENGTH = 30;

const shortenFilename = (name: string) =>
  name.length > MAX_FILENAME_LENGTH ? `${name.slice(0, MAX_FILENAME_LENGTH - 1)}...` : name;

export const LogoControl: Component = () => {
  let fileInput: HTMLInputElement | undefined;

  const handleFile = async (event: Event & { currentTarget: HTMLInputElement }) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      console.error('Please select an image file');
      return;
    }

    try {
      setLogo(file.name, await readFileAsDataURL(file));
    } catch (error) {
      console.error('Error processing logo:', error);
    }
  };

  const handleRemove = () => {
    removeLogo();
    if (fileInput) fileInput.value = '';
  };

  return (
    <div>
      <span class="body-s">Logo</span>
      <input
        ref={(el) => {
          fileInput = el;
        }}
        type="file"
        accept="image/*"
        class={styles.hiddenInput}
        onChange={handleFile}
      />

      <Show
        when={qrState.logo.filename}
        fallback={
          <div class={styles.row}>
            <button
              type="button"
              class={styles.upload}
              aria-label="Upload logo"
              data-appearance="secondary"
              onClick={() => fileInput?.click()}
            >
              <UploadIcon />
              <span>Choose file</span>
            </button>
          </div>
        }
      >
        {(filename) => (
          <>
            <div class={styles.row}>
              <div class={styles.display}>
                <UploadIcon />
                <span class="body-s">{shortenFilename(filename())}</span>
              </div>
              <button
                type="button"
                class={styles.iconOnly}
                aria-label="Remove logo"
                data-appearance="secondary"
                onClick={handleRemove}
              >
                <TrashIcon />
              </button>
            </div>
            <div class={styles.margin}>
              <SliderInput
                label="Logo margin"
                min={0}
                max={20}
                value={qrState.logo.margin}
                onChange={setLogoMargin}
              />
            </div>
          </>
        )}
      </Show>
    </div>
  );
};
