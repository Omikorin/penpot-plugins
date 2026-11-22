import type { CreatePatternEvent } from '@/common/types';

export const handleCreatePattern = (content: CreatePatternEvent['content']) => {
  const { data, name } = content;

  if (!data || !name) return;

  const center = penpot.viewport.center;
  const undoBlockId = penpot.history.undoBlockBegin();

  try {
    const group = penpot.createShapeFromSvg(data);

    if (group) {
      group.name = name;
      group.x = center.x;
      group.y = center.y;
    }
  } finally {
    penpot.history.undoBlockFinish(undoBlockId);
  }
};
