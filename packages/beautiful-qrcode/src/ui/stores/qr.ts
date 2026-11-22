import type { FileExtension } from 'qr-code-styling';
import { createStore } from 'solid-js';
import type { ElementType, FillType, QRElement } from '@/common/types';

export interface QRState {
  data: string;
  margin: number;
  fileType: FileExtension;
  logo: {
    filename: string | null;
    dataUrl: string | null;
    margin: number;
  };
  elements: Record<ElementType, QRElement>;
}

export const [qrState, setQrState] = createStore<QRState>({
  data: 'https://links.omikor.in',
  margin: 10,
  fileType: 'png',
  logo: { filename: null, dataUrl: null, margin: 0 },
  elements: {
    background: { fill: 'single', color: '#ffffff' },
    dots: { fill: 'single', color: '#000000', style: 'square' },
    cornersDot: { fill: 'single', color: '#000000', style: 'square' },
    cornersSquare: { fill: 'single', color: '#000000', style: 'square' },
  },
});

export const setData = (data: string) => {
  setQrState((s) => {
    s.data = data;
  });
};

export const setMargin = (margin: number) => {
  setQrState((s) => {
    s.margin = margin;
  });
};

export const setFileType = (fileType: FileExtension) => {
  setQrState((s) => {
    s.fileType = fileType;
  });
};

export const setLogo = (filename: string, dataUrl: string) => {
  setQrState((s) => {
    s.logo.filename = filename;
    s.logo.dataUrl = dataUrl;
  });
};

export const removeLogo = () => {
  setQrState((s) => {
    s.logo.filename = null;
    s.logo.dataUrl = null;
  });
};

export const setLogoMargin = (margin: number) => {
  setQrState((s) => {
    s.logo.margin = margin;
  });
};

export const setElementStyle = (type: ElementType, style: string) => {
  setQrState((s) => {
    s.elements[type].style = style;
  });
};

export const setElementFill = (type: ElementType, fill: FillType) => {
  setQrState((s) => {
    const element = s.elements[type];
    element.fill = fill;

    if (fill === 'single') {
      element.colorSecondary = undefined;
      element.rotation = undefined;
      return;
    }

    element.colorSecondary ??= '#ffffff';
    if (fill === 'linear') element.rotation = 0;
  });
};

export const setElementColor = (
  type: ElementType,
  color: string,
  secondary = false,
) => {
  setQrState((s) => {
    s.elements[type][secondary ? 'colorSecondary' : 'color'] = color;
  });
};

export const setElementRotation = (type: ElementType, rotation: number) => {
  setQrState((s) => {
    s.elements[type].rotation = rotation;
  });
};
