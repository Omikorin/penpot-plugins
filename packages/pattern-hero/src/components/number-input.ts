// @ts-nocheck
import type { AlpineComponent } from 'alpinejs';

// biome-ignore lint/suspicious/noExplicitAny: false positive
export const numberInput: AlpineComponent<any> = () => ({
  store: '' as string | undefined,
  storeKey: '' as string | undefined,
  value: 0,
  type: 'int' as 'int' | 'float',

  init() {
    if (this.$el.dataset.storeKey) {
      const [store, key] = this.$el.dataset.storeKey.split('.');
      // for use by input events
      this.store = store;
      this.storeKey = key;
      this.value = this.$store[store][key];
      this.type = this.$el.dataset.type;
    }
  },

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    let parsedValue: number;

    if (this.type === 'float') {
      parsedValue = parseFloat(input.value);
    } else {
      parsedValue = parseInt(input.value);
    }

    if (Number.isNaN(parsedValue)) return;

    this.value = parsedValue;

    if (this.store) this.$store[this.store][this.storeKey] = parsedValue;
  },
});
