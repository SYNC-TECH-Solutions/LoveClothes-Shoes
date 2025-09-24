'use server';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/sanity-client';
import Recommendations from '@/components/home/Recommendations';
import type { Metadata } from 'next';
import ProductDetailClient from '@/components/products/ProductDetailClient';

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


export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  
  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-background">
        <ProductDetailClient product={product} />
        <Recommendations />
    </div>
  );
}
