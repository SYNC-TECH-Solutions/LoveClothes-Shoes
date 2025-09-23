import { getProductRecommendations } from '@/ai/flows/ai-powered-product-recommendations';
import { products } from '@/lib/data';
import ProductGrid from '@/components/products/ProductGrid';
import type { Product } from '@/lib/types';

export default async function Recommendations() {
  let recommendedProducts: Product[] = [];

  try {
    const result = await getProductRecommendations({
      userHistory: '1,5', // Mock history: viewed Vibrant Summer Dress and Lilac Dream Blouse
      userPreferences: 'sustainable, dresses, colorful', // Mock preferences
    });

    if (result.recommendations) {
      const recommendedIds = result.recommendations
        .split(',')
        .map(id => id.trim());
      recommendedProducts = products.filter(p =>
        recommendedIds.includes(p.id)
      );
    }
  } catch (error) {
    console.error('Error fetching product recommendations:', error);
    // Fallback to showing first 4 products as a generic "Featured"
    recommendedProducts = products.slice(0, 4);
  }

  // Ensure we have something to show, but not more than 4
  if (recommendedProducts.length === 0) {
    recommendedProducts = products.slice(0, 4);
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            Just For You
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/60">
            AI-powered picks based on your style.
          </p>
        </div>
        <ProductGrid products={recommendedProducts.slice(0, 4)} />
      </div>
    </section>
  );
}