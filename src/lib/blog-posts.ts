// This file provides sample blog posts to populate Sanity.
// In a real project, you would write these directly in your Sanity Studio.

export const posts = [
    {
        _id: 'sustainable-fashion-guide',
        _type: 'post',
        title: 'Your Guide to a More Sustainable Wardrobe in 2024',
        slug: { _type: 'slug', current: 'sustainable-fashion-guide' },
        mainImage: {
            _type: 'image',
            alt: 'Person holding a green leaf in front of a rack of clothes',
            asset: {
                _type: 'reference',
                _ref: 'image-f22214950451a547c827d05b766141c21e0a1b5c-800x1200-jpg'
            }
        },
        publishedAt: '2024-07-20T10:00:00Z',
        excerpt: 'Learn how to make eco-friendly choices without sacrificing style. Our guide breaks down sustainable materials, ethical brands, and tips for a greener closet.',
        seoTitle: 'Sustainable Fashion Guide 2024 | Eco-Friendly Style Tips',
        seoDescription: 'Ready to build a sustainable wardrobe? Our guide covers everything from recycled fabrics to ethical production, helping you make conscious fashion choices.',
        body: [
            {
                _type: 'block',
                style: 'normal',
                _key: 'intro1',
                children: [{ _type: 'span', text: 'Making the switch to a more sustainable wardrobe can feel daunting, but it\'s one of the most impactful ways to reduce your environmental footprint. The fashion industry is a major contributor to pollution and waste, but conscious consumers—like you—are driving change. This guide will help you navigate the world of sustainable fashion.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                _key: 'h2-1',
                children: [{ _type: 'span', text: 'Understanding Sustainable Materials' }],
            },
            {
                _type: 'block',
                style: 'normal',
                _key: 'mat1',
                children: [{ _type: 'span', text: 'Not all fabrics are created equal. Here are some of the best eco-friendly materials to look for:' }],
            },
             {
                _type: 'block',
                listItem: 'bullet',
                level: 1,
                _key: 'mat-list1',
                children: [{ _type: 'span', text: 'Organic Cotton: Grown without harmful pesticides and using less water than conventional cotton.' }],
            },
             {
                _type: 'block',
                listItem: 'bullet',
                level: 1,
                _key: 'mat-list2',
                children: [{ _type: 'span', text: 'Linen: Made from the flax plant, it\'s durable, biodegradable, and requires minimal water.' }],
            },
            {
                _type: 'block',
                style: 'blockquote',
                _key: 'quote1',
                children: [{ _type: 'span', text: 'Fashion you can feel good about is always in style.' }],
            },
        ],
    },
    {
        _id: 'fall-fashion-trends-2024',
        _type: 'post',
        title: 'The Top 5 Fashion Trends to Watch for This Fall',
        slug: { _type: 'slug', current: 'fall-fashion-trends-2024' },
        mainImage: {
            _type: 'image',
            alt: 'A stylish person wearing a cozy brown sweater and jeans in autumn.',
             asset: {
                _type: 'reference',
                _ref: 'image-a78b54930b5399583b27629553641d1a6bb18579-800x1200-jpg'
            }
        },
        publishedAt: '2024-07-18T10:00:00Z',
        excerpt: 'From rich textures to bold silhouettes, we\'re breaking down the five biggest trends you\'ll be seeing everywhere this autumn. Get ready to update your wardrobe!',
        seoTitle: 'Top 5 Fall Fashion Trends 2024 | Autumn Style Guide',
        seoDescription: 'Discover the essential fall 2024 fashion trends. See what\'s new in colors, textures, and key pieces to keep your style on point this season.',
        body: [
            {
                _type: 'block',
                style: 'normal',
                _key: 'intro2',
                children: [{ _type: 'span', text: 'As the leaves begin to change, so does the fashion landscape. This fall is all about combining comfort with high-impact style. We\'ve scoured the runways and trend reports to bring you the top five looks to incorporate into your wardrobe this season.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                _key: 'h2-2',
                children: [{ _type: 'span', text: '1. Rich Chocolate Browns' }],
            },
            {
                _type: 'block',
                style: 'normal',
                _key: 'trend1',
                children: [{ _type: 'span', text: 'Move over, black. This season\'s go-to neutral is a deep, luxurious chocolate brown. From leather jackets to cozy knit sweaters, this versatile color adds warmth and sophistication to any outfit. It pairs beautifully with cream, rust, and even bold blues.' }],
            },
        ],
    },
    {
        _id: 'how-to-find-perfect-jeans',
        _type: 'post',
        title: 'The Ultimate Guide to Finding the Perfect Pair of Jeans',
        slug: { _type: 'slug', current: 'how-to-find-perfect-jeans' },
        mainImage: {
            _type: 'image',
            alt: 'A stack of folded denim jeans in various shades of blue.',
             asset: {
                _type: 'reference',
                _ref: 'image-e818b628469d7a264a938c352a1e0657e38f9215-800x1200-jpg'
            }
        },
        publishedAt: '2024-07-15T10:00:00Z',
        excerpt: 'Shopping for jeans can be a struggle. Our guide will help you understand different fits, rises, and washes to find that perfect pair you\'ll live in for years to come.',
        seoTitle: 'How to Find the Perfect Jeans | Denim Fit Guide',
        seoDescription: 'Your search for the perfect jeans ends here. Learn about different styles like straight-leg, bootcut, and skinny, and find the best fit for your body type.',
        body: [
             {
                _type: 'block',
                style: 'normal',
                _key: 'intro3',
                children: [{ _type: 'span', text: 'A great pair of jeans is the cornerstone of any wardrobe. They can be dressed up or down and last for years. But finding "the one" can be a challenge. This guide breaks down the key elements to consider on your quest for the perfect denim.' }],
            },
             {
                _type: 'block',
                style: 'h2',
                _key: 'h2-3',
                children: [{ _type: 'span', text: 'Know Your Rise' }],
            },
            {
                _type: 'block',
                style: 'normal',
                _key: 'rise1',
                children: [{ _type: 'span', text: 'The rise is the distance from the crotch to the waistband. It determines where the jeans sit on your body and can dramatically affect the overall silhouette. The three main types are low-rise, mid-rise, and high-rise.' }],
            },
        ],
    },
    {
        _id: 'accessorize-like-a-pro',
        _type: 'post',
        title: 'How to Accessorize: 5 Tips to Elevate Any Outfit',
        slug: { _type: 'slug', current: 'accessorize-like-a-pro' },
        mainImage: {
            _type: 'image',
            alt: 'A collection of stylish accessories including a watch, sunglasses, and a necklace on a flat surface.',
             asset: {
                _type: 'reference',
                _ref: 'image-d9036f0119339665c71e19416560411311033d59-800x1200-jpg'
            }
        },
        publishedAt: '2024-07-12T10:00:00Z',
        excerpt: 'Accessories are the secret weapon of any stylish person. Learn how to use jewelry, bags, and scarves to transform your look from simple to stunning.',
        seoTitle: 'How to Accessorize Like a Pro | 5 Easy Tips',
        seoDescription: 'Elevate your style with our top 5 accessory tips. Learn how to choose the right jewelry, bags, and more to perfectly complement your outfits.',
        body: [
             {
                _type: 'block',
                style: 'normal',
                _key: 'intro4',
                children: [{ _type: 'span', text: 'Accessories are more than just an afterthought; they are the key to defining your personal style. A simple outfit can be completely transformed with the right additions. Here are five tips to help you master the art of accessorizing.' }],
            },
        ],
    },
    {
        _id: 'investment-pieces',
        _type: 'post',
        title: '5 Wardrobe Investment Pieces That Are Always Worth It',
        slug: { _type: 'slug', current: 'investment-pieces' },
        mainImage: {
            _type: 'image',
            alt: 'A classic leather jacket hanging on a rack.',
             asset: {
                _type: 'reference',
                _ref: 'image-3d924151a60037a5033c467a9202613945415177-800x1200-jpg'
            }
        },
        publishedAt: '2024-07-10T10:00:00Z',
        excerpt: 'Tired of fast fashion? Discover five timeless pieces—from the perfect leather jacket to a classic trench coat—that will serve you for years to come.',
        seoTitle: '5 Timeless Wardrobe Investment Pieces | Quality Fashion',
        seoDescription: 'Build a wardrobe that lasts. We break down the 5 essential investment pieces that every stylish person should own. Quality over quantity.',
        body: [
             {
                _type: 'block',
                style: 'normal',
                _key: 'intro5',
                children: [{ _type: 'span', text: 'In a world of fleeting trends, building a wardrobe of timeless investment pieces is the smartest style move you can make. These are the high-quality, versatile items that form the foundation of countless outfits. Here are five pieces worth the splurge.' }],
            },
        ],
    },
    {
        _id: 'sneaker-care-101',
        _type: 'post',
        title: 'Sneaker Care 101: How to Keep Your Kicks Looking New',
        slug: { _type: 'slug', current: 'sneaker-care-101' },
        mainImage: {
            _type: 'image',
            alt: 'A person carefully cleaning a white sneaker with a brush.',
             asset: {
                _type: 'reference',
                _ref: 'image-0518349d44320f7e4f9b3b123d5a23075583597c-800x1200-jpg'
            }
        },
        publishedAt: '2024-07-08T10:00:00Z',
        excerpt: 'You\'ve invested in a great pair of sneakers, now what? Our guide to sneaker care will show you how to clean, protect, and store your favorite shoes to keep them fresh.',
        seoTitle: 'How to Clean Your Sneakers | Sneaker Care 101',
        seoDescription: 'Keep your favorite sneakers looking brand new with our expert care guide. Learn the best techniques for cleaning, protecting, and storing your shoes.',
        body: [
             {
                _type: 'block',
                style: 'normal',
                _key: 'intro6',
                children: [{ _type: 'span', text: 'A fresh pair of sneakers can make any outfit, but keeping them clean is a challenge. With the right techniques and products, you can extend the life of your favorite kicks and keep them looking box-fresh for years. Here’s how.' }],
            },
        ],
    },
    {
        _id: 'monochromatic-dressing',
        _type: 'post',
        title: 'Mastering Monochromatic: A Guide to Tonal Dressing',
        slug: { _type: 'slug', current: 'monochromatic-dressing' },
        mainImage: {
            _type: 'image',
            alt: 'A person wearing a stylish all-beige outfit.',
             asset: {
                _type: 'reference',
                _ref: 'image-4299491a566580f489f783637494488316279fbd-800x1200-jpg'
            }
        },
        publishedAt: '2024-07-05T10:00:00Z',
        excerpt: 'Dressing in a single color from head to toe is a chic and effortless way to make a statement. Learn the secrets to mastering monochromatic looks for any season.',
        seoTitle: 'How to Master Monochromatic Dressing | Tonal Outfits',
        seoDescription: 'Learn how to wear one color head-to-toe with our guide to monochromatic dressing. Discover tips on mixing textures and shades for a chic, sophisticated look.',
        body: [
             {
                _type: 'block',
                style: 'normal',
                _key: 'intro7',
                children: [{ _type: 'span', text: 'Monochromatic dressing—wearing different tones and shades of a single color—is one of the most sophisticated and easy ways to look put-together. It\'s a fashion editor favorite for a reason. Here’s how to get it right.' }],
            },
        ],
    },
    {
        _id: 'ethical-fashion-brands',
        _type: 'post',
        title: '10 Ethical Fashion Brands That Are Changing the Industry',
        slug: { _type: 'slug', current: 'ethical-fashion-brands' },
        mainImage: {
            _type: 'image',
            alt: 'A clothing tag that says "Made with love and recycled materials".',
             asset: {
                _type: 'reference',
                _ref: 'image-c6c74b5903b41b52781442116035174524c520a6-800x1200-jpg'
            }
        },
        publishedAt: '2024-07-02T10:00:00Z',
        excerpt: 'Looking to support brands that do good? We\'re highlighting 10 ethical and sustainable fashion brands that prioritize fair labor and eco-friendly practices.',
        seoTitle: '10 Ethical & Sustainable Fashion Brands to Support Now',
        seoDescription: 'Vote with your wallet. Discover 10 amazing fashion brands committed to ethical production, sustainable materials, and making a positive impact.',
        body: [
             {
                _type: 'block',
                style: 'normal',
                _key: 'intro8',
                children: [{ _type: 'span', text: 'Supporting ethical fashion brands is a powerful way to advocate for a better industry. These companies are committed to transparency, fair wages, and environmentally-friendly practices. Here are ten brands leading the charge.' }],
            },
        ],
    },
    {
        _id: 'work-from-home-style',
        _type: 'post',
        title: 'The New WFH Style: Look Good, Feel Comfortable',
        slug: { _type: 'slug', current: 'work-from-home-style' },
        mainImage: {
            _type: 'image',
            alt: 'A person sitting at a desk in a comfortable but stylish sweater.',
             asset: {
                _type: 'reference',
                _ref: 'image-a8e0d425719379893952f4477b5a837c0411a76f-800x1200-jpg'
            }
        },
        publishedAt: '2024-06-29T10:00:00Z',
        excerpt: 'Working from home doesn\'t mean sacrificing style. We show you how to build a comfortable, polished, and video-call-ready wardrobe.',
        seoTitle: 'Comfortable & Stylish Work From Home (WFH) Outfits',
        seoDescription: 'Elevate your work-from-home look with our style guide. Find the perfect balance of comfort and professionalism with these WFH outfit ideas.',
        body: [
             {
                _type: 'block',
                style: 'normal',
                _key: 'intro9',
                children: [{ _type: 'span', text: 'The age of remote work has changed how we dress. The goal is to be comfortable enough for your home office but polished enough for that surprise video call. It\'s a new category of style: "Zoom-appropriate comfort." Here’s how to nail it.' }],
            },
        ],
    },
    {
        _id: 'capsule-wardrobe-101',
        _type: 'post',
        title: 'How to Build a Capsule Wardrobe: A 10-Piece Starter Guide',
        slug: { _type: 'slug', current: 'capsule-wardrobe-101' },
        mainImage: {
            _type: 'image',
            alt: 'A minimalist clothing rack with a few essential, neutral-colored garments.',
             asset: {
                _type: 'reference',
                _ref: 'image-8a6a4b1b3b2c1c0c0c0c0c0c0c0c0c0c0c0c0c0c-800x1200-jpg'
            }
        },
        publishedAt: '2024-06-25T10:00:00Z',
        excerpt: 'Simplify your life and your closet. A capsule wardrobe is a collection of essential items that can be mixed and matched. Here\'s how to start with just 10 pieces.',
        seoTitle: 'How to Build a Capsule Wardrobe | 10-Piece Starter Guide',
        seoDescription: 'Simplify your style with our guide to building a capsule wardrobe. Learn how to create a versatile, minimalist closet with just 10 essential pieces.',
        body: [
             {
                _type: 'block',
                style: 'normal',
                _key: 'intro10',
                children: [{ _type: 'span', text: 'A capsule wardrobe is the ultimate "less is more" fashion philosophy. It\'s a curated collection of versatile pieces that you love to wear. The benefits? Less decision fatigue, more sustainable choices, and a closet full of outfits you feel great in. Here is our 10-piece starter guide.' }],
            },
        ],
    }
];
