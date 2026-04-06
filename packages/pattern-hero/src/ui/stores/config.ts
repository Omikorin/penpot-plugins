import { createStore } from 'solid-js/store';
import {
  ColumnsIcon,
  FolderIcon,
  PaddingIcon,
  RepeatIcon,
  RowsIcon,
  ShuffleIcon,
} from '@/assets/icons';
import type { PluginConfig } from '@/common/types';
import { emitCreatePattern } from '@/ui/services/messenger';

export const [config, setConfig] = createStore<PluginConfig>({
  rows: 10,
  columns: 10,
  padding: 30,
  repeatNodes: true,
  shuffleNodes: false,
  groupNodes: true,
});

export const settingsManifest = {
  numbers: [
    { key: 'rows', label: 'Rows', icon: RowsIcon },
    { key: 'columns', label: 'Columns', icon: ColumnsIcon },
    { key: 'padding', label: 'Padding', icon: PaddingIcon },
  ],
  toggles: [
    { key: 'repeatNodes', label: 'Repeat Nodes', icon: RepeatIcon },
    { key: 'shuffleNodes', label: 'Shuffle Nodes', icon: ShuffleIcon },
    { key: 'groupNodes', label: 'Group Nodes', icon: FolderIcon },
  ],
} as const;

export const handleInput = <K extends keyof PluginConfig>(
  key: K,
  value: PluginConfig[K],
) => {
  setConfig(key, value);
};

export const handleSubmit = () => {
  emitCreatePattern({ ...config });
};
