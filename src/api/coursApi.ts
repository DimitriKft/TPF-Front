// src/api/coursApi.ts
import {CoursItem} from '../types/cours';

const API_BASE_URL = 'https://www.headless.the-pixel-family.com/wp-json/wp/v2';

export async function fetchCours(): Promise<CoursItem[]> {
  const response = await fetch(`${API_BASE_URL}/cours`);
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  return response.json();
}
