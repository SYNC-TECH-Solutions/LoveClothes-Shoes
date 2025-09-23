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
            // This is a placeholder; in a real setup, you'd upload this to Sanity
            asset: {
                _ref: 'image-c8a8d8e0f9b0a1a0a0a0a0a0c0a0a0a0a0a0a0a0-1200x800-jpg',
                _type: 'reference'
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
                _ref: 'image-c8a8d8e0f9b0a1a0a0a0a0a0c0a0a0a0a0a0a0a0-1200x800-jpg',
                _type: 'reference'
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
                _ref: 'image-c8a8d8e0f9b0a1a0a0a0a0a0c0a0a0a0a0a0a0a0-1200x800-jpg',
                _type: 'reference'
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
];
