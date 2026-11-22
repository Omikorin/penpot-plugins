import type { Theme } from '@penpot/plugin-types';
import type { FileExtension, GradientType } from 'qr-code-styling';

export type FillType = 'single' | GradientType;

export type ElementType = 'background' | 'dots' | 'cornersDot' | 'cornersSquare';

export interface QRElement {
  fill: FillType;
  color: string;
  colorSecondary?: string;
  rotation?: number;
  style?: string;
}

// Penpot integration types
export interface InsertSVGEvent {
  type: 'insert-qr';
  content: {
    fileType: Extract<FileExtension, 'svg'>;
    data: string;
    name: string;
  };
}

export interface InsertImageEvent {
  type: 'insert-qr';
  content: {
    fileType: Exclude<FileExtension, 'svg'>;
    data: ArrayBuffer;
    name: string;
  };
}

export type InsertEvent = InsertSVGEvent | InsertImageEvent;

export type PluginUIEvent = InsertEvent;

export interface ThemeChangeEvent {
  type: 'themechange';
  content: Theme;
}

export type PluginEvent = ThemeChangeEvent;
