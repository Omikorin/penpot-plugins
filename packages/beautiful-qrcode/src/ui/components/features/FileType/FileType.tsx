import type { FileExtension } from 'qr-code-styling';
import type { Component } from 'solid-js';

import { Select, type SelectOption } from '@/ui/components/ui';
import { qrState, setFileType } from '@/ui/stores/qr';

const fileTypes: SelectOption<FileExtension>[] = [
  { value: 'png', label: 'PNG' },
  { value: 'svg', label: 'SVG' },
  { value: 'webp', label: 'WEBP' },
  { value: 'jpeg', label: 'JPEG' },
];

export const FileType: Component = () => (
  <Select label="File type" options={fileTypes} value={qrState.fileType} onChange={setFileType} />
);
