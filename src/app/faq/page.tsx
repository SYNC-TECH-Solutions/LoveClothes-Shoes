import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our affiliate model, shipping, returns, and how we select our products.',
};

const faqItems = [
    {
        question: "What is an affiliate website?",
        answer: "An affiliate website, like ours, partners with brands to feature their products. When you click a link on our site and make a purchase from the partner brand, we earn a small commission at no extra cost to you. It's a way for you to support our curation efforts while shopping for styles you love."
    },
    {
        question: "Are the prices on your site the final prices?",
        answer: "The prices displayed on our site are provided by our partner brands and are updated regularly. However, the final price is always the one you see on the partner brand's website at checkout. Prices, discounts, and availability are subject to change without notice."
    },
    {
        question: "How do shipping and returns work?",
        answer: "All shipping, returns, and customer service are handled directly by the brand you purchase from. When you click to buy a product, you are redirected to their website to complete the purchase. Please refer to their specific policies for details on shipping times, costs, and return procedures."
    },
    {
        question: "How do you choose the products you feature?",
        answer: "Our team of stylists and fashion enthusiasts carefully curates every item on our site. We look for high-quality, stylish, and sustainable products from brands we trust and admire. Our goal is to bring you a collection of items that we would wear and recommend ourselves."
    },
    {
        question: "Do you hold any inventory or handle payments?",
        answer: "No, we do not hold any inventory or process any payments ourselves. We are purely a curation and discovery platform. All transactions and fulfillment are securely managed by our trusted partner brands."
    }
]

export default function FAQPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container max-w-4xl py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
            <HelpCircle className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Have questions? We've got answers. Here are some of the most common queries we receive.
            </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                 <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-foreground/80">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
