import { asset } from './url';

export const images = {
  hero: { width: 640, height: 360, widths: [640, 1280] },
  'model-10ft': { width: 640, height: 400, widths: [640] },
  'model-20ft': { width: 640, height: 360, widths: [640, 1280] },
  'model-30ft': { width: 640, height: 400, widths: [640] },
  'model-40ft': { width: 640, height: 640, widths: [640] },
  'install-site': { width: 640, height: 360, widths: [640, 1280] },
  'install-site2': { width: 640, height: 435, widths: [640, 1280] },
  'transport-truck': { width: 640, height: 360, widths: [640, 1280] },
  'why-us': { width: 640, height: 360, widths: [640, 1280] },
  lineup: { width: 640, height: 360, widths: [640, 1280] },
  'detail-connectors': { width: 640, height: 640, widths: [640, 1280] },
  'tour20-01': { width: 640, height: 640, widths: [640, 1280, 1920] },
  'tour20-03': { width: 640, height: 480, widths: [640, 1280, 1920] },
  'tour20-04': { width: 640, height: 480, widths: [640, 1280, 1920] },
  'tour20-05': { width: 640, height: 480, widths: [640, 1280, 1920] },
  'tour20-06': { width: 640, height: 480, widths: [640, 1280, 1920] },
  'tour20-07': { width: 640, height: 480, widths: [640, 1280, 1920] },
  'tour20-08': { width: 640, height: 853, widths: [640, 1280, 1920] },
  'tour20-09': { width: 640, height: 480, widths: [640, 1280, 1920] },
  'plan-20ft-3d': { width: 640, height: 678, widths: [640] },
  'plan-30ft-3d': { width: 640, height: 478, widths: [640] },
  'plan-40ft-3d': { width: 640, height: 460, widths: [640] },
  'plan-20ft': { width: 640, height: 766, widths: [640] },
  'plan-30ft': { width: 640, height: 376, widths: [640] },
  'plan-40ft': { width: 640, height: 393, widths: [640] },
  'facade-07': { width: 640, height: 480, widths: [640] },
  'facade-12': { width: 640, height: 480, widths: [640] },
  'facade-13': { width: 640, height: 480, widths: [640] },
  'facade-17': { width: 640, height: 480, widths: [640] },
  'facade-20': { width: 640, height: 480, widths: [640] },
  'facade-24': { width: 640, height: 480, widths: [640] },
  'facade-27': { width: 640, height: 480, widths: [640] },
  'facade-29': { width: 640, height: 480, widths: [640] },
  'facade-render-15': { width: 640, height: 489, widths: [640, 1280, 1920] },
  'facade-render-16': { width: 640, height: 448, widths: [640, 1280, 1920] },
  'kitchen-05': { width: 640, height: 480, widths: [640] },
  'kitchen-13': { width: 640, height: 480, widths: [640] },
  'kitchen-18': { width: 640, height: 480, widths: [640] },
  'bathroom-01': { width: 640, height: 480, widths: [640] },
  'bathroom-13': { width: 640, height: 480, widths: [640] },
  'bathroom-24': { width: 640, height: 480, widths: [640] },
  'window-04': { width: 640, height: 480, widths: [640] },
  'window-05': { width: 640, height: 480, widths: [640] },
  'window-07': { width: 640, height: 480, widths: [640] },
  'structure-03': { width: 640, height: 480, widths: [640, 1280] },
  'structure-05': { width: 640, height: 480, widths: [640, 1280] },
} as const;

export type ImageId = keyof typeof images;

/** Renders must not be captioned as photographs of the Nebojsa house. */
export const renderIds = new Set<ImageId>([
  'hero',
  'model-30ft',
  'model-40ft',
  'facade-render-15',
  'facade-render-16',
]);

export function isRender(id: ImageId): boolean {
  return renderIds.has(id);
}

export function imageCaption(id: ImageId): string {
  return isRender(id)
    ? 'Vizualizácia z katalógu, nie fotografia domu v Nebojsi.'
    : 'Záber z katalógu dodávateľa.';
}

export function isImageId(id: string | null | undefined): id is ImageId {
  return Boolean(id && Object.prototype.hasOwnProperty.call(images, id));
}

export function largest(id: ImageId): { webp: string; avif: string } {
  const meta = images[id];
  const width = meta.widths[meta.widths.length - 1] ?? meta.widths[0];
  return {
    webp: asset(`media/img/${id}-${width}.webp`),
    avif: asset(`media/img/${id}-${width}.avif`),
  };
}
