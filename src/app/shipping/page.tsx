import { Truck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Shipping Information',
    description: 'Learn how shipping works on our affiliate platform. All shipping is handled directly by our partner brands.',
};

export default function ShippingPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container max-w-4xl py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <Truck className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Shipping Information</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Everything you need to know about how your new favorite items get to you.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto max-w-full space-y-6">
          <h2>How Shipping Works</h2>
          <p>
            Because we are an affiliate platform, we don't ship products directly. When you make a purchase, you are buying from one of our trusted partner brands. As such, all shipping is handled by the brand from which you purchase the item.
          </p>
          
          <h2>Shipping Costs & Times</h2>
          <p>
            Shipping costs, methods, and delivery times vary by brand and your location. You will be able to see the specific shipping details during the checkout process on the partner brand's website before you confirm your order. Many of our partners offer excellent shipping options, including free or expedited services.
          </p>
          
          <h2>Order Tracking</h2>
          <p>
            Once your order is shipped, the partner brand will send you a confirmation email containing your tracking number. You can use this number to track your package directly on the carrier's website (e.g., UPS, FedEx, USPS).
          </p>
          
          <h2>International Shipping</h2>
          <p>
            Many of our partner brands ship internationally. Please check the brand's shipping policy on their website to confirm if they deliver to your country.
          </p>

           <h2>Questions About Your Shipment?</h2>
          <p>
            If you have any questions about the status of your shipment, please contact the customer service team of the brand you purchased from. They will have the most up-to-date information regarding your order.
          </p>
        </div>
      </div>
    </div>
  );
}
