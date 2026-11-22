import type { Options } from 'qr-code-styling';

import type { ElementType } from '@/common/types';
import type { QRState } from '@/ui/stores/qr';

const elementKeys: ElementType[] = ['background', 'dots', 'cornersDot', 'cornersSquare'];

export const buildOptions = (state: QRState): Options => {
  const options: Options = {
    width: 300,
    height: 300,
    type: 'canvas',
    data: state.data,
    margin: state.margin,
    image: state.logo.dataUrl ?? undefined,
    imageOptions: { margin: state.logo.margin },
  };

  for (const type of elementKeys) {
    const element = state.elements[type];
    // biome-ignore lint/suspicious/noExplicitAny: polymorphic type
    const style = element.style as any;

    options[`${type}Options`] =
      element.fill === 'single'
        ? { color: element.color, type: style, gradient: undefined }
        : {
            type: style,
            gradient: {
              type: element.fill,
              rotation: element.rotation ? element.rotation * (Math.PI / 180) : 0,
              colorStops: [
                { offset: 0, color: element.color },
                { offset: 1, color: element.colorSecondary ?? '#ffffff' },
              ],
            },
          };
  }

  return options;
};
