import type { InsertEvent } from '@/common/types';

export const handleInsertQR = async (content: InsertEvent['content']) => {
  const { fileType, data, name } = content;

  if (!data || !name) return;

  const center = penpot.viewport.center;
  const undoBlockId = penpot.history.undoBlockBegin();

  if (fileType === 'svg') {
    const group = await penpot.createShapeFromSvgWithImages(data);
    if (group) {
      group.name = name;
      group.x = center.x;
      group.y = center.y;
    }
  } else {
    const imageData = await penpot.uploadMediaData(
      name,
      new Uint8Array(data),
      `image/${fileType}`,
    );

    const shape = penpot.createRectangle();
    shape.resize(300, 300);
    shape.fills = [{ fillOpacity: 1, fillImage: imageData }];
    shape.x = center.x;
    shape.y = center.y;
  }

  penpot.history.undoBlockFinish(undoBlockId);
};
