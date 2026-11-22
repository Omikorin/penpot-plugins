import { type Component, createUniqueId } from 'solid-js';
import { qrState, setData } from '@/ui/stores/qr';

export const QRContent: Component = () => {
  const id = createUniqueId();

  return (
    <div>
      <label for={id} class="body-s">
        QR code content
      </label>
      <input
        id={id}
        type="text"
        maxlength="1000"
        class="input"
        style={{ width: '100%', 'margin-top': '0.2rem' }}
        placeholder="Enter text or URL"
        required
        value={qrState.data}
        onInput={(e) => {
          // an empty value would produce no QR code, keep the last valid one
          if (e.currentTarget.value) setData(e.currentTarget.value);
        }}
      />
    </div>
  );
};
