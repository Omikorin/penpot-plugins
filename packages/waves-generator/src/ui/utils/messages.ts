/**
 * Origin of the Penpot window that embeds the plugin. It can't be hardcoded
 * because Penpot may be self-hosted. `ancestorOrigins` is not available in Firefox,
 * so this is `undefined` there.
 */
export const getParentOrigin = (): string | undefined => {
  const ancestorOrigin = window.location.ancestorOrigins?.[0];
  if (ancestorOrigin) return ancestorOrigin;

  if (!document.referrer) return undefined;

  try {
    return new URL(document.referrer).origin;
  } catch {
    return undefined;
  }
};

/** Accepts only messages sent by the Penpot window that embeds the plugin. */
export const isFromParent = (event: MessageEvent): boolean => {
  if (event.source !== window.parent) return false;

  const parentOrigin = getParentOrigin();

  // Firefox may expose neither ancestorOrigins nor a referrer.
  return parentOrigin === undefined || event.origin === parentOrigin;
};
