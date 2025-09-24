import { Truck, Package, Leaf } from 'lucide-react';

const valueProps = [
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Our partners offer fast and reliable shipping, with free options on many orders over $75.',
  },
  {
    icon: Package,
    title: 'Easy Returns',
    description: "Not the perfect fit? No problem. Our partner brands offer hassle-free return policies.",
  },
  {
    icon: Leaf,
    title: 'Sustainable Choices',
    description: 'We prioritize featuring products made from eco-friendly materials and ethical production methods.',
  },
];

export default function ValueProps() {
  return (
    <section className="bg-secondary">
      <div className="container max-w-7xl py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {valueProps.map((prop) => (
            <div key={prop.title} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <prop.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-headline font-semibold">{prop.title}</h3>
                <p className="mt-1 text-base text-foreground/60">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
