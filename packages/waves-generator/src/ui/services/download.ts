export const downloadSvg = (markup: string) => {
  const source = `<?xml version="1.0" standalone="no"?>\r\n${markup}`;
  const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const timestamp = new Date().toISOString().replace(/:/g, '-').slice(0, -5);

  const link = document.createElement('a');
  link.href = url;
  link.download = `Waves-${timestamp}.svg`;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
