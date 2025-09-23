'use client';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            Loved by Stylists
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/60">
            See what our amazing customers are saying.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatarImage = PlaceHolderImages.find(
                (img) => img.id === testimonial.avatar
              );
              return (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col justify-between p-6">
                        <div>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                            ))}
                          </div>
                          <p className="text-foreground/80">"{testimonial.text}"</p>
                        </div>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar>
                            {avatarImage && (
                              <AvatarImage
                                src={avatarImage.imageUrl}
                                alt={testimonial.name}
                                data-ai-hint={avatarImage.imageHint}
                              />
                            )}
                            <AvatarFallback>
                              {testimonial.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-foreground/60">
                              {testimonial.handle}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
