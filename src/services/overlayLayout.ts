export interface OverlayPosition {
  x: number;
  y: number;
}

const HUD_WIDTH = 244;
const EDGE_MARGIN = 12;
const NARROW_VIEWPORT_PX = 560;

function viewportWidth(): number {
  if (typeof window === 'undefined' || typeof window.innerWidth !== 'number') return 1280;
  return Number.isFinite(window.innerWidth) && window.innerWidth > 0 ? window.innerWidth : 1280;
}

export function isNarrowViewport(): boolean {
  return viewportWidth() < NARROW_VIEWPORT_PX;
}

export function defaultOverlayPosition(): OverlayPosition {
  const width = viewportWidth();
  if (width < NARROW_VIEWPORT_PX) return { x: EDGE_MARGIN, y: EDGE_MARGIN };
  return { x: Math.max(EDGE_MARGIN, width - HUD_WIDTH - EDGE_MARGIN), y: EDGE_MARGIN };
}