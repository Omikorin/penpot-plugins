import type { CreatePatternEvent } from '@/common/types';
import { shuffleArray } from '@/common/utils';
import { arrangeNodesInGrid } from '@/plugin/grid-layout';
import {
  cleanupSelection,
  createClones,
  finalizeSelection,
} from '@/plugin/nodes';

export const handleCreatePattern = (content: CreatePatternEvent['content']) => {
  const { config, name } = content;

  if (!config || !name || penpot.selection.length === 0) return;

  const { x, y } = penpot.selection[0];

  const undoBlockId = penpot.history.undoBlockBegin();

  const gridLength = config.rows * config.columns;
  const clones = createClones(gridLength, config.repeatNodes);

  cleanupSelection();

  // we can only shuffle in place, otherwise we need to remove and generate again
  // `gridLength` worth of nodes that could kill the browser
  if (config.shuffleNodes) shuffleArray(clones);

  arrangeNodesInGrid(clones, config, { x, y });

  finalizeSelection(clones, config.groupNodes, name);

  penpot.history.undoBlockFinish(undoBlockId);
};
