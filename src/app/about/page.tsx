import { Users, Target, Eye } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and community behind Love Clothes & Shoes. Your curated guide to the best in style and conscious shopping.',
};


export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container max-w-7xl py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">About Love Clothes & Shoes</h1>
            <p className="text-lg text-foreground/80">
              Welcome to Love Clothes & Shoes, your curated destination for the latest trends and timeless styles in fashion. We believe that what you wear is a powerful form of self-expression, and our mission is to bring you pieces that make you feel confident, stylish, and true to yourself.
            </p>
            <p className="text-md text-foreground/60 italic">
              <strong>Affiliate Disclosure:</strong> Please note that Love Clothes & Shoes is an affiliate marketing website. This means we earn a commission on qualifying purchases made through the links on our site, at no extra cost to you. We hand-pick and feature products we genuinely love and believe you will too. Your support helps us continue our mission of curating the best in fashion.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/logo.png" 
              alt="Love Clothes & Shoes Logo"
              fill
              className="object-contain p-8"
              data-ai-hint="logo"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="py-16 lg:py-24">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3 p-6 bg-card rounded-lg shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-semibold">Our Mission</h3>
              <p className="text-foreground/70">To curate the best in fashion, making style accessible and inspiring confidence in everyone, while promoting sustainable and ethical choices.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-card rounded-lg shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Eye className="h-6 w-6" />
                </div>
              <h3 className="font-headline text-xl md:text-2xl font-semibold">Our Vision</h3>
              <p className="text-foreground/70">To be the most trusted voice in fashion curation, known for our commitment to quality, style, and positive impact on the industry.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-card rounded-lg shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                </div>
              <h3 className="font-headline text-xl md:text-2xl font-semibold">Our Community</h3>
              <p className="text-foreground/70">We are more than a store; we are a community of fashion lovers, trendsetters, and conscious consumers making a difference together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
