import type { Theme } from '@penpot/plugin-types';

export type PluginConfig = {
  rows: number;
  columns: number;
  padding: number;
  repeatNodes: boolean;
  shuffleNodes: boolean;
  groupNodes: boolean;
};

export interface CreatePatternEvent {
  type: 'create-pattern';
  content: {
    config: PluginConfig;
    name: string;
  };
}

export type PluginUIEvent = CreatePatternEvent;

export interface ThemeChangeEvent {
  type: 'theme';
  content: Theme;
}

export type PluginEvent = ThemeChangeEvent;
