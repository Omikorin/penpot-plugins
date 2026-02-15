import type { Shape } from '@penpot/plugin-types';
import type {
  CreatePatternEvent,
  PluginConfig,
  PluginEvent,
  PluginUIEvent,
} from './common/types';
import { shuffleArray } from './common/utils';

penpot.ui.open('Pattern Hero', `?theme=${penpot.theme}`, {
  width: 300,
  height: 450,
});

penpot.ui.onMessage<PluginUIEvent>((message) => {
  if (message.type === 'create-pattern') {
    createPattern(message.content);
    // Here we take the following approach:
    // - `selection` has all possible (chosen) shapes for use
    // - clone `selection` to `clones`
    // - `clones` array has gridLength number of shapes
    // - remove all selected shapes (we cloned them before)
    // - omit main instances of components (removal eq dangling instances)
    // - it doesn't matter, all we care about is in the `clones` array
    // - set positions with padding optionally shuffle, group
    // - finally overwrite selection directly in penpot
    // caveats:
    // - penpot instantly creates and modifies nodes in design without any option for `appendChild`-like solution
    // this means bad performance (especially when shuffling to new array) and tricky approach to making plugin like this
  }
});

const createClones = (gridLength: number, shouldRepeat: boolean): Shape[] => {
  // filtering was added because of penpot/penpot#5507
  // issue: https://github.com/penpot/penpot/issues/5507
  const filteredSelection = penpot.selection
    .filter((shape) => {
      return (
        !shape.isComponentInstance() ||
        !(shape.isComponentInstance() && !shape.isComponentRoot())
      );
    })
    .map((shape) => shape.clone());

  if (!shouldRepeat) return filteredSelection;

  const clones = [...filteredSelection];

  while (clones.length < gridLength) {
    const remainingCount = gridLength - clones.length;
    const newClones = filteredSelection
      .slice(0, Math.min(remainingCount, filteredSelection.length))
      .map((node) => node.clone());
    clones.push(...newClones);
  }

  return clones;
};

const cleanupSelection = () => {
  for (const node of penpot.selection) {
    // we don't want to destroy components
    if (node.isComponentMainInstance()) continue;
    node.remove();
  }
};

const arrangeNodesInGrid = (
  nodes: Shape[],
  config: PluginConfig,
  startPosition: { x: number; y: number },
) => {
  const { rows, columns, padding } = config;
  let { x, y } = startPosition;
  const startX = x;

  for (let i = 0, count = 0; i < rows; i++) {
    if (count >= nodes.length) break;

    for (let j = 0; j < columns; j++) {
      if (count >= nodes.length) break;

      const currentNode = nodes[count];
      currentNode.x = x;
      currentNode.y = y;
      x = x + currentNode.width + padding;
      count++;
    }

    x = startX;
    y = y + nodes[i].height + padding;
  }
};

const finalizeSelection = (
  nodes: Shape[],
  shouldGroup: boolean,
  name: string,
) => {
  if (shouldGroup) {
    const group = penpot.group(nodes);
    if (!group) return;
    group.name = name;
    penpot.selection = [group];
  } else {
    penpot.selection = nodes;
  }
};

const createPattern = (content: CreatePatternEvent['content']) => {
  const { config, name } = content;

  if (!config || !name) return;
  if (!(penpot.selection.length > 0)) return;

  const { x, y } = penpot.selection[0];

  const undoBlockId = penpot.history.undoBlockBegin();

  const gridLength = config.rows * config.columns;
  const clones = createClones(gridLength, config.repeat);

  cleanupSelection();

  // we can only shuffle in place, otherwise we need to remove and generate again
  // `gridLength` worth of nodes that could kill the browser
  if (config.shuffle) shuffleArray(clones);

  arrangeNodesInGrid(clones, config, { x, y });
  finalizeSelection(clones, config.group, name);

  penpot.history.undoBlockFinish(undoBlockId);
};

// Update the theme in the iframe
penpot.on('themechange', (theme) => {
  sendMessage({ type: 'themechange', content: theme });
});

const sendMessage = (message: PluginEvent) => {
  penpot.ui.sendMessage(message);
};
