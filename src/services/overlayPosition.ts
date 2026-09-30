import type { OverlayPosition } from './overlayLayout';

const OVERLAY_POSITION_KEY = 'dinotty:overlay-pos:dinotty-omp:dinotty-omp:hud';
const MIGRATION_FLAG_KEY = 'dinotty-omp:overlay-pos-migrated:v1';
const SAFE_TOP_PX = 44;
const SAFE_RIGHT_BAND_PX = 120;
const HUD_WIDTH = 244;
const EDGE_MARGIN = 12;

function readStored(): OverlayPosition | null {
  try {
    const raw = localStorage.getItem(OVERLAY_POSITION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<OverlayPosition>;
    if (
      typeof parsed?.x !== 'number' ||
      typeof parsed?.y !== 'number' ||
      !Number.isFinite(parsed.x) ||
      !Number.isFinite(parsed.y)
    ) return null;
    return { x: parsed.x, y: parsed.y };
  } catch {
    return null;
  }
}

function isUnsafe(stored: OverlayPosition, width: number, height: number): boolean {
  if (stored.x < 0 || stored.y < 0 || stored.x > width || stored.y > height) return true;
  if (stored.y >= SAFE_TOP_PX) return false;
  const legacyRightDefault =
    stored.x >= width - HUD_WIDTH - EDGE_MARGIN && stored.x <= width - HUD_WIDTH + EDGE_MARGIN;
  return legacyRightDefault || stored.x > width - SAFE_RIGHT_BAND_PX;
}

export function migrateStoredOverlayPosition(fallback: OverlayPosition): void {
  if (typeof window === 'undefined') return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0 || width >= 560) return;

  try {
    if (localStorage.getItem(MIGRATION_FLAG_KEY)) return;
  } catch {
    return;
  }

  const stored = readStored();
  if (!stored || !isUnsafe(stored, width, height)) return;

  try {
    localStorage.setItem(OVERLAY_POSITION_KEY, JSON.stringify(fallback));
    localStorage.setItem(MIGRATION_FLAG_KEY, '1');
  } catch {}
}