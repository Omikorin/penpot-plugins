// @ts-nocheck
import type { AlpineComponent } from 'alpinejs';

// biome-ignore lint/suspicious/noExplicitAny: false positive
export const switchComponent: AlpineComponent<any> = () => ({
  store: '' as string | undefined,
  storeKey: '' as string | undefined,
  checked: false,

  init() {
    if (this.$el.dataset.storeKey) {
      const [store, key] = this.$el.dataset.storeKey.split('.');
      // for use by input events
      this.store = store;
      this.storeKey = key;
      this.checked = this.$store[store][key];
    }
  },

  updateChecked(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;

    if (this.store) this.$store[this.store][this.storeKey] = this.checked;
  },
});
