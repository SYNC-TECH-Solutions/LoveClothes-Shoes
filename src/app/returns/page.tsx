import { PackageOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Returns & Exchanges',
    description: 'Our policy on returns and exchanges. All returns are handled directly by the partner brand from which you made your purchase.',
};

export default function ReturnsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container max-w-4xl py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <PackageOpen className="mx-auto h-12 w-12 md:h-16 md:w-16 text-primary mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Returns & Exchanges</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            We want you to love your purchase. Here’s how to handle returns and exchanges.
          </p>
        </div>

        <div className="prose prose-md md:prose-lg dark:prose-invert mx-auto max-w-full space-y-6">
          <h2 className="text-xl md:text-2xl">Our Return Policy</h2>
          <p>
            As an affiliate marketing platform, Love Clothes & Shoes does not handle returns or exchanges directly. All returns and exchanges are processed according to the policy of the partner brand from which you purchased your item.
          </p>
          
          <h2 className="text-xl md:text-2xl">How to Initiate a Return</h2>
          <p>
            To initiate a return or exchange, please visit the website of the brand where you made the purchase and follow their instructions. Typically, you will need your order number and the email address used to make the purchase. Most brands have a dedicated returns portal or a customer service contact to guide you through the process.
          </p>
          
          <h2 className="text-xl md:text-2xl">Return Windows & Conditions</h2>
          <p>
            Return policies vary significantly between brands. Most have a return window of 14 to 30 days and require items to be in unworn, original condition with tags attached. We strongly recommend reviewing the return policy on the brand's website before you make a purchase.
          </p>
          
          <h2 className="text-xl md:text-2xl">Refunds</h2>
          <p>
            Once the partner brand receives and processes your return, they will issue a refund to your original form of payment. The processing time for refunds can vary. Please contact the brand's customer service for any questions regarding your refund status.
          </p>

           <h2 className="text-xl md:text-2xl">Need Help?</h2>
          <p>
            If you're having trouble finding the return policy for a specific brand, feel free to <a href="/contact" className="text-primary hover:underline">contact us</a>. While we can't process the return for you, we're happy to help you find the information you need.
          </p>
        </div>
      </div>
    </div>
  );
}
