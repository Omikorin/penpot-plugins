import type { Shape } from '@penpot/plugin-types';
import type { PluginConfig } from '@/common/types';

export const arrangeNodesInGrid = (
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
