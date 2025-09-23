
import type { Post } from '@/lib/types';

export const localPosts: Omit<Post, 'body' | '_id'> & { body: { _type: 'block' | 'h2' | 'blockquote'; children: { text: string }[] }[] }[] = [
    {
        slug: 'sustainable-fashion-guide',
        title: 'Your Guide to a More Sustainable Wardrobe in 2024',
        mainImageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzdXN0YWluYWJsZSUyMGZhc2hpb258ZW58MHx8fHwxNzU4NjM3Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImageHint: 'sustainable fashion',
        publishedAt: '2024-07-20T10:00:00Z',
        excerpt: 'Learn how to make eco-friendly choices without sacrificing style. Our guide breaks down sustainable materials, ethical brands, and tips for a greener closet.',
        seoTitle: 'Sustainable Fashion Guide 2024 | Eco-Friendly Style Tips',
        seoDescription: 'Ready to build a sustainable wardrobe? Our guide covers everything from recycled fabrics to ethical production, helping you make conscious fashion choices.',
        body: [
            { _type: 'block', children: [{ text: "Making the switch to a more sustainable wardrobe can feel daunting, but it's one of the most impactful ways to reduce your environmental footprint. The fashion industry is a major contributor to pollution and waste, but conscious consumers—like you—are driving change. This guide will help you navigate the world of sustainable fashion." }] },
            { _type: 'h2', children: [{ text: 'Understanding Sustainable Materials' }] },
            { _type: 'block', children: [{ text: 'Not all fabrics are created equal. Here are some of the best eco-friendly materials to look for: Organic Cotton, Linen, and Recycled Polyester.' }] },
            { _type: 'blockquote', children: [{ text: 'Fashion you can feel good about is always in style.' }] },
        ],
    },
    {
        slug: 'fall-fashion-trends-2024',
        title: 'The Top 5 Fashion Trends to Watch for This Fall',
        mainImageUrl: 'https://images.unsplash.com/photo-1539006232235-99d985c5453e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmYWxsJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTg2Mzc3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImageHint: 'fall fashion',
        publishedAt: '2024-07-18T10:00:00Z',
        excerpt: 'From rich textures to bold silhouettes, we\'re breaking down the five biggest trends you\'ll be seeing everywhere this autumn. Get ready to update your wardrobe!',
        seoTitle: 'Top 5 Fall Fashion Trends 2024 | Autumn Style Guide',
        seoDescription: 'Discover the essential fall 2024 fashion trends. See what\'s new in colors, textures, and key pieces to keep your style on point this season.',
        body: [
             { _type: 'block', children: [{ text: "As the leaves begin to change, so does the fashion landscape. This fall is all about combining comfort with high-impact style. We've scoured the runways and trend reports to bring you the top five looks to incorporate into your wardrobe this season." }] },
            { _type: 'h2', children: [{ text: '1. Rich Chocolate Browns' }] },
            { _type: 'block', children: [{ text: "Move over, black. This season's go-to neutral is a deep, luxurious chocolate brown. From leather jackets to cozy knit sweaters, this versatile color adds warmth and sophistication to any outfit. It pairs beautifully with cream, rust, and even bold blues." }] },
        ],
    },
    {
        slug: 'how-to-find-perfect-jeans',
        title: 'The Ultimate Guide to Finding the Perfect Pair of Jeans',
        mainImageUrl: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxibHVlJTIwamVhbnN8ZW58MHx8fHwxNzU4NTkzNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImageHint: 'blue jeans',
        publishedAt: '2024-07-15T10:00:00Z',
        excerpt: 'Shopping for jeans can be a struggle. Our guide will help you understand different fits, rises, and washes to find that perfect pair you\'ll live in for years to come.',
        seoTitle: 'How to Find the Perfect Jeans | Denim Fit Guide',
        seoDescription: 'Your search for the perfect jeans ends here. Learn about different styles like straight-leg, bootcut, and skinny, and find the best fit for your body type.',
        body: [
            { _type: 'block', children: [{ text: 'A great pair of jeans is the cornerstone of any wardrobe. They can be dressed up or down and last for years. But finding "the one" can be a challenge. This guide breaks down the key elements to consider on your quest for the perfect denim.' }] },
            { _type: 'h2', children: [{ text: 'Know Your Rise' }] },
            { _type: 'block', children: [{ text: 'The rise is the distance from the crotch to the waistband. It determines where the jeans sit on your body and can dramatically affect the overall silhouette. The three main types are low-rise, mid-rise, and high-rise.' }] },
        ],
    },
    {
        slug: 'accessorize-like-a-pro',
        title: 'How to Accessorize: 5 Tips to Elevate Any Outfit',
        mainImageUrl: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhY2Nlc3Nvcmllc3xlbnwwfHx8fDE3NTg2Mzc3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImageHint: 'accessories',
        publishedAt: '2024-07-12T10:00:00Z',
        excerpt: 'Accessories are the secret weapon of any stylish person. Learn how to use jewelry, bags, and scarves to transform your look from simple to stunning.',
        seoTitle: 'How to Accessorize Like a Pro | 5 Easy Tips',
        seoDescription: 'Elevate your style with our top 5 accessory tips. Learn how to choose the right jewelry, bags, and more to perfectly complement your outfits.',
        body: [
            { _type: 'block', children: [{ text: 'Accessories are more than just an afterthought; they are the key to defining your personal style. A simple outfit can be completely transformed with the right additions. Here are five tips to help you master the art of accessorizing.' }] },
        ],
    },
    {
        slug: 'investment-pieces',
        title: '5 Wardrobe Investment Pieces That Are Always Worth It',
        mainImageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxsZWF0aGVyJTIwamFja2V0fGVufDB8fHx8MTc1ODU4NzQ0NXww&ixlib=rb-4.1.0&q=80&w=1080',
        mainImageHint: 'leather jacket',
        publishedAt: '2024-07-10T10:00:00Z',
        excerpt: 'Tired of fast fashion? Discover five timeless pieces—from the perfect leather jacket to a classic trench coat—that will serve you for years to come.',
        seoTitle: '5 Timeless Wardrobe Investment Pieces | Quality Fashion',
        seoDescription: 'Build a wardrobe that lasts. We break down the 5 essential investment pieces that every stylish person should own. Quality over quantity.',
        body: [
            { _type: 'block', children: [{ text: 'In a world of fleeting trends, building a wardrobe of timeless investment pieces is the smartest style move you can make. These are the high-quality, versatile items that form the foundation of countless outfits. Here are five pieces worth the splurge.' }] },
        ],
    },
    {
        slug: 'sneaker-care-101',
        title: 'Sneaker Care 101: How to Keep Your Kicks Looking New',
        mainImageUrl: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwY2FyZXxlbnwwfHx8fDE3NTg2Mzc3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImageHint: 'sneaker care',
        publishedAt: '2024-07-08T10:00:00Z',
        excerpt: 'You\'ve invested in a great pair of sneakers, now what? Our guide to sneaker care will show you how to clean, protect, and store your favorite shoes to keep them fresh.',
        seoTitle: 'How to Clean Your Sneakers | Sneaker Care 101',
        seoDescription: 'Keep your favorite sneakers looking brand new with our expert care guide. Learn the best techniques for cleaning, protecting, and storing your shoes.',
        body: [
            { _type: 'block', children: [{ text: 'A fresh pair of sneakers can make any outfit, but keeping them clean is a challenge. With the right techniques and products, you can extend the life of your favorite kicks and keep them looking box-fresh for years. Here’s how.' }] },
        ],
    },
    {
        slug: 'monochromatic-dressing',
        title: 'Mastering Monochromatic: A Guide to Tonal Dressing',
        mainImageUrl: 'https://images.unsplash.com/photo-1574279606130-4936e37580e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21hdGljJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTg2Mzc3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImageHint: 'monochromatic fashion',
        publishedAt: '2024-07-05T10:00:00Z',
        excerpt: 'Dressing in a single color from head to toe is a chic and effortless way to make a statement. Learn the secrets to mastering monochromatic looks for any season.',
        seoTitle: 'How to Master Monochromatic Dressing | Tonal Outfits',
        seoDescription: 'Learn how to wear one color head-to-toe with our guide to monochromatic dressing. Discover tips on mixing textures and shades for a chic, sophisticated look.',
        body: [
            { _type: 'block', children: [{ text: 'Monochromatic dressing—wearing different tones and shades of a single color—is one of the most sophisticated and easy ways to look put-together. It\'s a fashion editor favorite for a reason. Here’s how to get it right.' }] },
        ],
    },
    {
        slug: 'ethical-fashion-brands',
        title: '10 Ethical Fashion Brands That Are Changing the Industry',
        mainImageUrl: 'https://images.unsplash.com/photo-1594940026219-a1d82121404c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHlldGhpY2FsJTIwZmFzaGlvbnxlbnwwfHx8fDE3NTg2Mzc3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImageHint: 'ethical fashion',
        publishedAt: '2024-07-02T10:00:00Z',
        excerpt: 'Looking to support brands that do good? We\'re highlighting 10 ethical and sustainable fashion brands that prioritize fair labor and eco-friendly practices.',
        seoTitle: '10 Ethical & Sustainable Fashion Brands to Support Now',
        seoDescription: 'Vote with your wallet. Discover 10 amazing fashion brands committed to ethical production, sustainable materials, and making a positive impact.',
        body: [
            { _type: 'block', children: [{ text: 'Supporting ethical fashion brands is a powerful way to advocate for a better industry. These companies are committed to transparency, fair wages, and environmentally-friendly practices. Here are ten brands leading the charge.' }] },
        ],
    },
    {
        slug: 'work-from-home-style',
        title: 'The New WFH Style: Look Good, Feel Comfortable',
        mainImageUrl: 'https://images.unsplash.com/photo-1589901809072-c518e38d1796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b3JrJTIwZnJvbSUyMGhvbWUlMjBzdHlsZXxlbnwwfHx8fDE3NTg2Mzc3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImageHint: 'work from home style',
        publishedAt: '2024-06-29T10:00:00Z',
        excerpt: 'Working from home doesn\'t mean sacrificing style. We show you how to build a comfortable, polished, and video-call-ready wardrobe.',
        seoTitle: 'Comfortable & Stylish Work From Home (WFH) Outfits',
        seoDescription: 'Elevate your work-from-home look with our style guide. Find the perfect balance of comfort and professionalism with these WFH outfit ideas.',
        body: [
            { _type: 'block', children: [{ text: 'The age of remote work has changed how we dress. The goal is to be comfortable enough for your home office but polished enough for that surprise video call. It\'s a new category of style: "Zoom-appropriate comfort." Here’s how to nail it.' }] },
        ],
    },
    {
        slug: 'capsule-wardrobe-101',
        title: 'How to Build a Capsule Wardrobe: A 10-Piece Starter Guide',
        mainImageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa6ce24868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXBzdWxlJTIwd2FyZHJvYmV8ZW58MHx8fHwxNzU4NjM3Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImageHint: 'capsule wardrobe',
        publishedAt: '2024-06-25T10:00:00Z',
        excerpt: 'Simplify your life and your closet. A capsule wardrobe is a collection of essential items that can be mixed and matched. Here\'s how to start with just 10 pieces.',
        seoTitle: 'How to Build a Capsule Wardrobe | 10-Piece Starter Guide',
        seoDescription: 'Simplify your style with our guide to building a capsule wardrobe. Learn how to create a versatile, minimalist closet with just 10 essential pieces.',
        body: [
            { _type: 'block', children: [{ text: 'A capsule wardrobe is the ultimate "less is more" fashion philosophy. It\'s a curated collection of versatile pieces that you love to wear. The benefits? Less decision fatigue, more sustainable choices, and a closet full of outfits you feel great in. Here is our 10-piece starter guide.' }] },
        ],
    }
];

export const getAllLocalPosts = async (): Promise<Post[]> => {
    return localPosts.map(p => ({
        ...p,
        _id: p.slug,
         // The body format is different, so we cast it for type compatibility.
         // The rendering component will need to handle this new structure.
        body: p.body as any,
    }));
};

export const getLocalPostBySlug = async (slug: string): Promise<Post | undefined> => {
    const post = localPosts.find(p => p.slug === slug);
    if (!post) {
        return undefined;
    }
    return {
        ...post,
        _id: post.slug,
        body: post.body as any,
    };
};
