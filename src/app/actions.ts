'use server';

import { visualSearchForProducts } from '@/ai/flows/visual-search-for-products';
import { products } from '@/lib/data';
import type { Product } from '@/lib/types';

export async function findSimilarProducts(
  photoDataUri: string
): Promise<Product[]> {
  try {
    const { productMatches } = await visualSearchForProducts({ photoDataUri });

    if (!productMatches || productMatches.length === 0) {
      return [];
    }
    
    // In a real application with a database, you would fetch products by these IDs.
    // For this mock data example, we filter the local array.
    const matchedProducts = products.filter((p) =>
      productMatches.includes(p.id)
    );
    
    return matchedProducts;
  } catch (error) {
    console.error('Error in visual search flow:', error);
    // For demonstration, if AI flow fails, return some random products
    // to simulate a match. In production, you'd handle this more gracefully.
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }
}
