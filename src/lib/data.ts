
import type { Product, Category, Testimonial, NavLink } from '@/lib/types';

export const products: Product[] = []; // This will be fetched from Sanity

export const categories: Category[] = [
  { name: 'Dresses', image: 'category-4' },
  { name: 'Shoes', image: 'category-5' },
  { name: 'T-Shirts', image: 'product-3-a' },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Jessica T.',
    handle: '@jessicat',
    text: "I'm in love with my new dress from Love Clothes & Shoes! The quality is amazing, and I got so many compliments. Plus, their commitment to sustainability is a huge bonus!",
    avatar: 'avatar-1',
  },
  {
    name: 'Mike P.',
    handle: '@mikep',
    text: 'These are the most comfortable sneakers I have ever owned. Seriously. 10/10 would recommend to anyone looking for style and comfort.',
    avatar: 'avatar-2',
  },
  {
    name: 'Chloe L.',
    handle: '@chloel',
    text: "Fast shipping and fantastic customer service. The packaging was beautiful and eco-friendly. I'll definitely be shopping here again!",
    avatar: 'avatar-3',
  },
  {
    name: 'Ben R.',
    handle: '@benr',
    text: "Great selection of men's streetwear. The quality of the t-shirt I bought is top-notch. Finally, a store that gets it right.",
    avatar: 'avatar-4',
  },
];

export const navLinks: NavLink[] = [
    { href: '/#new-arrivals', label: 'New Arrivals' },
    { href: '/#women', label: 'Women' },
    { href: '/#men', label: 'Men' },
    { href: '/#shoes', label: 'Shoes' },
    { href: '/blog', label: 'Blog' },
    { href: '/sustainability', label: 'Sustainability' },
  ];
