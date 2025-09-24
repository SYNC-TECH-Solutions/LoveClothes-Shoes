import { getAllProducts } from '@/lib/sanity-client';
import ProductGrid from '@/components/products/ProductGrid';
import type { Product } from '@/lib/types';

export default async function Recommendations() {
  let recommendedProducts: Product[] = [];

  try {
    const allProducts = await getAllProducts();
    // For now, we'll just show the first 4 products as "recommendations".
    // A real implementation might use an AI flow or more complex logic.
    recommendedProducts = allProducts.slice(0, 4);
  
  } catch (error) {
    console.error('Error fetching product recommendations:', error);
    // If there's an error, we'll show an empty grid.
    recommendedProducts = [];
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Just For You
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/60">
            Our latest collection, curated to match your style.
          </p>
        </div>
        <ProductGrid products={recommendedProducts} />
      </div>
    </section>
  );
}
