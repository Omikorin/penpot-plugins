// @ts-nocheck

// biome-ignore lint/suspicious/noExplicitAny: false positive
export const complexitySlider: AlpineComponent<any> = () => ({
  value: 10,

  init() {
    this.value = Number.parseInt(this.$el.value, 10);
  },

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = Number.parseInt(input.value, 10);
    this.$store.wave.updateComplexity(this.value);
  },
});
