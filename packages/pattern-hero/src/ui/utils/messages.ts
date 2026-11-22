/**
 * Origin of the Penpot window that embeds the plugin. It can't be hardcoded
 * because Penpot may be self-hosted. `ancestorOrigins` is not available in Firefox,
 * so this is `undefined` there.
 */
export const getParentOrigin = (): string | undefined => {
  const ancestorOrigin = window.location.ancestorOrigins?.[0];
  if (ancestorOrigin) return ancestorOrigin;

  if (!document.referrer) return undefined;

  return new URL(document.referrer).origin;
};

/** Accepts only messages sent by the Penpot window that embeds the plugin. */
export const isFromParent = (event: MessageEvent): boolean => {
  if (event.source !== window.parent) return false;

  const parentOrigin = getParentOrigin();
  return parentOrigin !== undefined && event.origin === parentOrigin;
};
