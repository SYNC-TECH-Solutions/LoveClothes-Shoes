import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/data';

function getCategoryImage(categoryName: string) {
  // Find a product in that category
  const productInCategory = products.find(
    p => p.category.toLowerCase() === categoryName.toLowerCase()
  );
  if (productInCategory && productInCategory.images.length > 0) {
    // Find the placeholder image for that product
    return PlaceHolderImages.find(img => img.id === productInCategory.images[0]);
  }
  // Fallback to a generic category image if no product is found
  return PlaceHolderImages.find(img => img.id.startsWith('category-'));
}


export default function FeaturedCategories() {
  const displayedCategories = [
    { name: 'Dresses' },
    { name: 'Shoes' },
    { name: 'T-Shirts' },
  ]; 

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/60">
            Discover our curated collections.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedCategories.map((category) => {
            const image = getCategoryImage(category.name);
            return (
              <Link href="#" key={category.name}>
                <Card className="group relative h-96 overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <CardHeader className="absolute bottom-0 w-full text-white">
                    <CardTitle className="font-headline text-3xl font-bold flex items-center justify-between">
                      <span>{category.name}</span>
                      <ArrowRight className="h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}