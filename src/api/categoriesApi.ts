// src/api/categoriesApi.ts
import {CategoryItem} from '../types/categorie';
const API_BASE_URL = 'https://www.headless.the-pixel-family.com/wp-json/wp/v2';

export async function fetchCategories(): Promise<CategoryItem[]> {
  const response = await fetch(`${API_BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
}
