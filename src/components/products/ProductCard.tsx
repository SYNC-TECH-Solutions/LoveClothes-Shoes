import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasSale = product.salePrice && product.salePrice < product.price;

  return (
    <Link href={`/product/${product._id}`} className="group">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[3/4] overflow-hidden">
          {product.mainImageUrl && (
            <Image
              src={product.mainImageUrl}
              alt={product.name}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-0"
              data-ai-hint={product.mainImageHint}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          )}
          {product.hoverImageUrl && (
            <Image
              src={product.hoverImageUrl}
              alt={`${product.name} (hover)`}
              fill
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              data-ai-hint={product.hoverImageHint}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          )}
          {hasSale && (
            <Badge variant="destructive" className="absolute top-3 left-3 z-10">SALE</Badge>
          )}
        </div>
        <CardContent className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <p className="text-sm text-foreground/60">{product.brand}</p>
            <h3 className="font-semibold mt-1 truncate group-hover:text-primary transition-colors">{product.name}</h3>
          </div>
          <div className="mt-2">
            {hasSale ? (
              <div className="flex items-baseline gap-2">
                <p className="text-lg font-semibold text-destructive">${product.salePrice?.toFixed(2)}</p>
                <p className="text-sm text-foreground/60 line-through">${product.price.toFixed(2)}</p>
              </div>
            ) : (
              <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
