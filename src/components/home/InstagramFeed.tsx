import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function InstagramFeed() {
  const instaPosts = PlaceHolderImages.filter((img) =>
    img.id.startsWith('instagram-')
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            #StyleHeart
          </h2>
          <Link
            href="#"
            className="mt-2 text-lg text-primary hover:underline flex items-center justify-center gap-2"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow us on Instagram</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {instaPosts.map((post) => (
            <Link href="#" key={post.id}>
              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={post.imageUrl}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={post.imageHint}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16.6vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
