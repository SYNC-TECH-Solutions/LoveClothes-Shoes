import { getAllProducts } from '@/lib/sanity-client';
import ProductGrid from '@/components/products/ProductGrid';
import type { Product } from '@/lib/types';

export default async function Recommendations() {
  let recommendedProducts: Product[] = [];

  try {
    // In a real app, you'd use the AI flow. For now, we'll fetch all products.
    const allProducts = await getAllProducts();
    recommendedProducts = allProducts.slice(0, 4); // Take first 4 as recommendations for now
  
  } catch (error) {
    console.error('Error fetching product recommendations:', error);
    recommendedProducts = [];
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            Just For You
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/60">
            Our latest collection.
          </p>
        </div>
        <ProductGrid products={recommendedProducts} />
      </div>
    </section>
  );
}
