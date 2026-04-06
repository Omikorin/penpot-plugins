import type { Component } from 'solid-js';
import { handleSubmit } from '@/ui/stores/config';

export const Buttons: Component = () => {
  return (
    <div class="button-group">
      <button
        type="button"
        id="btn-create"
        data-appearance="primary"
        onClick={() => handleSubmit()}
      >
        Create
      </button>
    </div>
  );
};
