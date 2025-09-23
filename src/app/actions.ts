'use server';

import { visualSearchForProducts } from '@/ai/flows/visual-search-for-products';
import { getAllProducts } from '@/lib/sanity-client';
import type { Product } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export async function findSimilarProducts(
  photoDataUri: string
): Promise<Product[]> {
  try {
    const allProducts = await getAllProducts();
    if (!allProducts || allProducts.length === 0) return [];

    // The AI flow is mocked, so we'll simulate a visual search result.
    // In a real application, you would pass product inventory details to the AI.
    const { productMatches } = await visualSearchForProducts({ photoDataUri });

    if (!productMatches || productMatches.length === 0) {
      // Fallback: return a few random items if AI returns nothing
       const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
       return shuffled.slice(0, 3);
    }
    
    // For this example, we assume the AI returns product *names* that are similar.
    // A real implementation would use IDs or more robust matching.
    const matchedProducts = allProducts.filter((p: Product) =>
      productMatches.some(match => p.name.toLowerCase().includes(match.toLowerCase()))
    );

     if (matchedProducts.length > 0) {
      return matchedProducts;
    } else {
      // Fallback if names don't match
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    }
    
  } catch (error) {
    console.error('Error in visual search flow:', error);
    // For demonstration, if AI flow fails, return some random products
    // to simulate a match. In production, you'd handle this more gracefully.
    const allProducts = await getAllProducts();
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }
}

export async function subscribeToNewsletter(email: string) {
    if (!email) {
        return { success: false, message: 'Email is required.' };
    }
    console.log(`New newsletter subscription from: ${email}`);
    // Here you would integrate with a real email service provider like Mailchimp or ConvertKit.
    // For now, we'll just simulate a successful subscription.
    return { success: true, message: 'Thanks for subscribing!' };
}
