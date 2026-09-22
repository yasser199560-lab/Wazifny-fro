/**
 * Returns an absolute HTTP(S) URL suitable for navigation or image sources.
 * API-provided URLs are untrusted, so schemes such as `javascript:` and
 * `data:` must never be passed through to the DOM.
 */
export function safeExternalUrl(value: string | null | undefined): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}
