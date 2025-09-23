import { Newspaper } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Press',
    description: 'See what the media is saying about Love Clothes & Shoes and our unique approach to curated, sustainable fashion.',
};

const pressMentions = [
    {
        publication: "Vogue",
        title: "The New Wave of Conscious Shopping",
        date: "October 2024",
        excerpt: "Platforms like Love Clothes & Shoes are leading the charge in making sustainable fashion more accessible..."
    },
    {
        publication: "TechCrunch",
        title: "How Affiliate Marketing is Reshaping E-Commerce",
        date: "September 2024",
        excerpt: "With a curated approach, Love Clothes & Shoes proves that the affiliate model can be both profitable and tasteful."
    },
    {
        publication: "GQ",
        title: "Your Guide to the Best Fall Styles",
        date: "August 2024",
        excerpt: "We found our new favorite sustainable denim thanks to the expert curation at Love Clothes & Shoes."
    }
];

export default function PressPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container max-w-5xl py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
            <Newspaper className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">In The News</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                See what others are saying about our unique approach to curated, sustainable fashion.
            </p>
        </div>

        <div className="space-y-8">
            {pressMentions.map((mention, index) => (
                <Card key={index} className="bg-card">
                    <CardHeader>
                        <CardTitle className="text-2xl font-headline">{mention.title}</CardTitle>
                        <CardDescription>{mention.publication} - {mention.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80">"{mention.excerpt}"</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
