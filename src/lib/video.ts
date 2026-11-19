import { asset } from './url';

export interface VideoSource {
  src: string;
  type: string;
  media?: string;
}

/** WebM is smaller for these clips, so it is offered first. */
const WEBM_FIRST = new Set(['model-f20', 'model-f30', 'model-f40', 'staged-wide']);

export const WIDE_MEDIA = '(orientation: landscape) and (min-width: 768px)';

export function poster(id: string): string {
  return asset(`media/video/${id}-poster.webp`);
}

export function captions(id: string): string {
  return asset(`captions/${id}.vtt`);
}

export function sourcesFor(id: string, media?: string): VideoSource[] {
  const mp4: VideoSource = { src: asset(`media/video/${id}.mp4`), type: 'video/mp4', media };
  const webm: VideoSource = { src: asset(`media/video/${id}.webm`), type: 'video/webm', media };
  return WEBM_FIRST.has(id) ? [webm, mp4] : [mp4, webm];
}

/** Landscape/desktop source first, portrait source as the fallback. */
export function responsiveSources(tallId: string, wideId: string): VideoSource[] {
  return [...sourcesFor(wideId, WIDE_MEDIA), ...sourcesFor(tallId)];
}
