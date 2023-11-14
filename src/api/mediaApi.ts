// src/api/mediaApi.ts
import {MediaItem} from '../types/media';

const API_BASE_URL = 'https://www.headless.the-pixel-family.com/wp-json/wp/v2';

export async function fetchMedia(mediaId: number): Promise<MediaItem> {
  const response = await fetch(`${API_BASE_URL}/media/${mediaId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch media with id ${mediaId}`);
  }
  return response.json();
}
