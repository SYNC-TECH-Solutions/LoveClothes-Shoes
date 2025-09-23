import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductById } from '@/lib/sanity-client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Truck } from 'lucide-react';
import Recommendations from '@/components/home/Recommendations';
import type { Product } from '@/lib/types';

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product: Product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  const hasSale = product.salePrice && product.salePrice < product.price;

  return (
    <div className="bg-background">
      <div className="container max-w-7xl py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg border">
              {product.mainImageUrl && (
                <Image
                  src={product.mainImageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  data-ai-hint={product.mainImageHint}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.imageUrls?.slice(0, 3).map((image, index) => {
                return (
                  image && (
                    <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg border">
                      <Image
                        src={image.url}
                        alt={`${product.name} - view ${index + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint={image.hint}
                        sizes="33vw"
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium text-primary">{product.brand}</p>
              <h1 className="font-headline text-3xl md:text-4xl font-bold mt-1">{product.name}</h1>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-primary fill-primary' : 'text-muted-foreground/50'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-foreground/60">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-foreground/80">{product.description}</p>
            
            <div>
                {hasSale ? (
                <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-destructive">${product.salePrice?.toFixed(2)}</span>
                    <span className="text-xl text-foreground/60 line-through">${product.price.toFixed(2)}</span>
                    <Badge variant="destructive">SALE</Badge>
                </div>
                ) : (
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                )}
            </div>

            {/* Size Selector */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes?.map((size) => (
                  <Button key={size} variant="outline" size="sm" className="w-16">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div>
                <h3 className="text-sm font-semibold mb-2">Color</h3>
                <div className="flex flex-wrap gap-3">
                    {product.colors?.map((color) => (
                    <button key={color} className="h-8 w-8 rounded-full border-2 border-transparent ring-2 ring-offset-2 ring-offset-background focus:ring-ring focus:border-foreground"
                        style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}>
                        <span className="sr-only">{color}</span>
                    </button>
                    ))}
                </div>
            </div>

            <Button size="lg" className="w-full">Add to Cart</Button>
            
            <div className="flex items-center gap-3 text-sm text-foreground/60 border-t pt-6">
                <Truck className="h-5 w-5" />
                <span>Free shipping on orders over $75</span>
            </div>
          </div>
        </div>
      </div>
      <Recommendations />
    </div>
  );
}
