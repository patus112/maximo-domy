import type { Model } from './catalog';

interface Box {
  length: number;
  width: number;
  height: number;
}

export function formatMm(mm: number): string {
  return (mm / 1000).toLocaleString('sk-SK', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatBox(box: Box): string {
  return `${formatMm(box.length)} × ${formatMm(box.width)} × ${formatMm(box.height)} m`;
}

export function formatWeight(tons: number): string {
  const digits = Number.isInteger(tons) ? 0 : 1;
  return `${tons.toLocaleString('sk-SK', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })} t`;
}

export function formatArea(area: number): string {
  return `${area.toLocaleString('sk-SK')} m²`;
}

/** How many folded houses fit in one 40' HC, in Slovak. Joined models need two containers. */
export function containerCount(model: Pick<Model, 'id' | 'units_per_40HC'>): string {
  if (model.id.endsWith('-joined')) return '2 kontajnery 40′ HC';
  const count = model.units_per_40HC;
  if (count === 1) return '1 dom';
  if (count >= 2 && count <= 4) return `${count} domy`;
  return `${count} domov`;
}
