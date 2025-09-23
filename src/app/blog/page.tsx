import { getAllPosts } from '@/lib/sanity-client';
import type { Post } from '@/lib/types';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { format } from 'date-fns';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'The latest trends, style guides, and fashion news from the team at Love Clothes & Shoes.',
};

export default async function BlogPage() {
    const posts: Post[] = await getAllPosts();

    return (
        <div className="bg-background text-foreground">
            <div className="container max-w-7xl py-12 md:py-16 lg:py-20">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Blog</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Stay ahead of the trends with our latest articles on fashion, sustainability, and style.
                    </p>
                </div>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map(post => (
                            <Link href={`/blog/${post.slug}`} key={post._id}>
                                <Card className="group flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
                                    {post.mainImageUrl && (
                                        <div className="relative aspect-video w-full overflow-hidden">
                                            <Image 
                                                src={post.mainImageUrl}
                                                alt={post.mainImageHint || post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription>{post.excerpt}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="text-sm text-foreground/60">{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</p>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-lg text-foreground/60">No blog posts found. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    )
}
