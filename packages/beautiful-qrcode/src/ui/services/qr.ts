import QRCodeStyling from 'qr-code-styling';

import { qrState } from '@/ui/stores/qr';
import { buildOptions } from '@/ui/utils/options';

import { emitInsertQR } from './messenger';

export const qr = new QRCodeStyling(buildOptions(qrState));

export const insertQR = async () => {
  try {
    const { fileType } = qrState;

    if (fileType === 'svg') {
      emitInsertQR({ fileType, data: qr._svg?.outerHTML ?? '' });
      return;
    }

    const blob = (await qr.getRawData(fileType)) as Blob;
    emitInsertQR({ fileType, data: await blob.arrayBuffer() });
  } catch (error) {
    console.error('Error inserting QR code:', error);
  }
};

export const downloadQR = async () => {
  try {
    const timestamp = new Date().toISOString().replace(/:/g, '-').slice(0, -5);

    await qr.download({
      name: `QR-Code-${timestamp}`,
      extension: qrState.fileType,
    });
  } catch (error) {
    console.error('Error downloading QR code:', error);
  }
};

export const readFileAsDataURL = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
