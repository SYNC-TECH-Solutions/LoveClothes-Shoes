import { getPostBySlug } from '@/lib/sanity-client'
import { notFound } from 'next/navigation'
import Image from 'next/image';
import type { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        openGraph: {
            title: post.seoTitle || post.title,
            description: post.seoDescription || post.excerpt,
            images: [
                {
                    url: post.mainImageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.mainImageHint || post.title,
                }
            ]
        }
    }
}

export default async function BlogPostPage({ params }: Props) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }
    
    const components = {
        block: {
            h2: ({children}: any) => <h2 className="font-headline text-3xl font-bold mt-8 mb-4">{children}</h2>,
            h3: ({children}: any) => <h3 className="font-headline text-2xl font-semibold mt-6 mb-3">{children}</h3>,
            normal: ({children}: any) => <p className="mb-4 text-lg leading-relaxed">{children}</p>,
            blockquote: ({children}: any) => <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-xl">{children}</blockquote>,
        },
        marks: {
            link: ({value, children}: any) => {
                const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
                return (
                    <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : ''} className="text-primary hover:underline">
                    {children}
                    </a>
                )
            },
        },
        list: {
            bullet: ({children}: any) => <ul className="list-disc list-inside space-y-2 my-6 pl-4 text-lg">{children}</ul>,
            number: ({children}: any) => <ol className="list-decimal list-inside space-y-2 my-6 pl-4 text-lg">{children}</ol>,
        }
    }

    return (
        <div className="bg-background text-foreground">
            <div className="container max-w-4xl py-12 md:py-16 lg:py-20">
                <article>
                    <header className="mb-8">
                        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">{post.title}</h1>
                        <p className="text-foreground/60">{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</p>
                    </header>

                    {post.mainImageUrl && (
                         <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg mb-8">
                            <Image 
                                src={post.mainImageUrl}
                                alt={post.mainImageHint || post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                   
                    <div className="prose dark:prose-invert prose-lg max-w-none mx-auto">
                         <PortableText value={post.body} components={components} />
                    </div>

                </article>
            </div>
        </div>
    )
}
