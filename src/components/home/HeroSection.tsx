import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { generatePersonalizedHero } from '@/ai/flows/personalized-homepage-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default async function HeroSection() {
  const fallbackImage = PlaceHolderImages.find(
    (img) => img.id === 'hero-fallback'
  );

  let heroContent = {
    headline: 'Your style, your story.\nFind it here. ✨',
    imageUrl: fallbackImage?.imageUrl ?? '',
  };
  let imageHint = fallbackImage?.imageHint ?? 'fashion model';

  try {
    const result = await generatePersonalizedHero({
      userPreferences:
        'likes bright colors, floral patterns, and comfortable sneakers',
      productCatalog:
        'dresses, sneakers, t-shirts, sustainable clothing for men and women',
    });
    if (result.headline && result.imageUrl) {
      heroContent = result;
      // We don't get a hint from the AI, so we'd have to parse the URL or have a default.
      // For this case we will default to fashion.
      imageHint = 'fashion style';
    }
  } catch (e) {
    console.error('Failed to generate personalized hero content:', e);
    // Fallback content is already set
  }

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full">
      <div className="absolute inset-0">
        <Image
          src={heroContent.imageUrl}
          alt="Stylish person wearing modern clothes"
          fill
          className="object-cover"
          data-ai-hint={imageHint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold !leading-tight tracking-tighter whitespace-pre-line">
          {heroContent.headline}
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Shop Women <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="secondary">
            Shop Men <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
