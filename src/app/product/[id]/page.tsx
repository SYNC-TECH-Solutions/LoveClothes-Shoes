'use client';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductById } from '@/lib/sanity-client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Truck, Loader2 } from 'lucide-react';
import Recommendations from '@/components/home/Recommendations';
import type { Product } from '@/lib/types';
import type { Metadata } from 'next';

// Although this is a client component, this function can be used by Next.js
// to generate metadata for the page.
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProductById(params.id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [
        {
          url: product.mainImageUrl,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}


export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await getProductById(params.id);
        if (!fetchedProduct) {
          notFound();
        } else {
          setProduct(fetchedProduct);
          if (fetchedProduct.sizes && fetchedProduct.sizes.length > 0) {
            setSelectedSize(fetchedProduct.sizes[0]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
        notFound();
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [params.id]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!product) {
    return notFound();
  }

  const handleBuyNow = () => {
    // In a real affiliate site, you would get the affiliate link for the product.
    // This now comes from your Sanity data. If it doesn't exist, it falls back
    // to a Google search for the product name.
    const affiliateLink = product.affiliateUrl || 'https://www.google.com/search?q=' + encodeURIComponent(product.name);
    window.open(affiliateLink, '_blank');
  };

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
             {product.imageUrls && product.imageUrls.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                {product.imageUrls.slice(0, 3).map((image, index) => {
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
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              {product.brand && <p className="text-sm font-medium text-primary">{product.brand}</p>}
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
                {product.reviews > 0 && <span className="text-sm text-foreground/60">({product.reviews} reviews)</span>}
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
             {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes?.map((size) => (
                    <Button 
                      key={size} 
                      variant={selectedSize === size ? "default" : "outline"} 
                      size="sm" 
                      className="w-16"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}


            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div>
                  <h3 className="text-sm font-semibold mb-2">Color</h3>
                  <div className="flex flex-wrap gap-3">
                      {product.colors.map((color) => (
                      <button 
                        key={color} 
                        className="h-8 w-8 rounded-full border-2 border-transparent ring-2 ring-offset-2 ring-offset-background focus:ring-ring focus:border-foreground"
                        style={{ backgroundColor: color.toLowerCase().replace(/\s/g, '') }}
                        title={color}
                      >
                          <span className="sr-only">{color}</span>
                      </button>
                      ))}
                  </div>
              </div>
            )}


            <Button size="lg" className="w-full" onClick={handleBuyNow}>Buy Now</Button>
            
            <div className="flex items-center gap-3 text-sm text-foreground/60 border-t pt-6">
                <Truck className="h-5 w-5" />
                <span>Shipping and returns handled by our trusted partners.</span>
            </div>
          </div>
        </div>
      </div>
      <Recommendations />
    </div>
  );
}
