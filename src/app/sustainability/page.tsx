import { Leaf, Recycle, Globe } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability',
  description: 'Our commitment to a greener future. Learn how we promote eco-friendly materials, ethical production, and conscious consumerism.',
};

export default function SustainabilityPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container max-w-7xl py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Commitment to a Greener Future</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            At Love Clothes & Shoes, we believe that fashion and sustainability can and must coexist. We are dedicated to making a positive impact on the planet by promoting conscious consumerism and partnering with brands that share our values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
           <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="https://picsum.photos/seed/sustainability-main/800/450" 
              alt="Lush green landscape with a clear river"
              fill
              className="object-cover"
              data-ai-hint="green landscape"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold">Eco-Friendly Materials</h3>
                <p className="text-foreground/70">We champion products made from sustainable materials like organic cotton, linen, Tencel, and recycled fabrics. By choosing these, we collectively help reduce water consumption, pesticide use, and waste in the fashion industry.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold">Ethical Production</h3>
                <p className="text-foreground/70">We partner with brands that are transparent about their supply chains and ensure fair labor practices, safe working conditions, and living wages for their workers. We believe great style shouldn't come at a human cost.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold">Conscious Curation</h3>
                <p className="text-foreground/70">As an affiliate platform, our power lies in choosing which brands to feature. We are committed to highlighting brands that are making a real effort to reduce their environmental footprint and promote a more circular economy in fashion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
            <h2 className="font-headline text-3xl font-bold">Join Us on Our Journey</h2>
            <p className="mt-3 max-w-2xl mx-auto text-foreground/70">
                Every purchase you make through our affiliate links sends a message to the industry that you support a more sustainable future for fashion. Thank you for being a part of the change.
            </p>
        </div>
      </div>
    </div>
  );
}
