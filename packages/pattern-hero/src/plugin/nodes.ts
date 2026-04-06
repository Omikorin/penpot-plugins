import type { Shape } from '@penpot/plugin-types';

export const createClones = (
  gridLength: number,
  shouldRepeat: boolean,
): Shape[] => {
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

export const cleanupSelection = () => {
  for (const node of penpot.selection) {
    // we don't want to destroy components
    if (node.isComponentMainInstance()) continue;
    node.remove();
  }
};

export const finalizeSelection = (
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
