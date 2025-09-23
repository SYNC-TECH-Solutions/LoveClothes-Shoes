import { getLocalPostBySlug } from '@/lib/blog-content';
import { notFound } from 'next/navigation'
import Image from 'next/image';
import type { Metadata } from 'next';
import { format } from 'date-fns';

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getLocalPostBySlug(params.slug);

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

// Simple component to render the local blog body
const BlogBody = ({ body }: { body: { _type: string; children: { text: string }[] }[] }) => {
    return (
        <div>
            {body.map((block, index) => {
                const text = block.children.map(child => child.text).join('');
                switch (block._type) {
                    case 'h2':
                        return <h2 key={index} className="font-headline text-3xl font-bold mt-10 mb-4">{text}</h2>;
                    case 'blockquote':
                        return <blockquote key={index} className="border-l-4 border-primary pl-6 italic my-8 text-xl text-foreground/80">{text}</blockquote>;
                    default:
                        return <p key={index} className="mb-6 text-lg leading-relaxed text-foreground/90">{text}</p>;
                }
            })}
        </div>
    );
};


export default async function BlogPostPage({ params }: Props) {
    const post = await getLocalPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-background text-foreground">
            <div className="container max-w-4xl py-12 md:py-16 lg:py-20">
                <article>
                    <header className="mb-8 md:mb-12 text-center">
                        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">{post.title}</h1>
                        <p className="text-foreground/60 text-lg">{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</p>
                    </header>

                    {post.mainImageUrl && (
                         <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg mb-8 md:mb-12">
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
                         <BlogBody body={post.body as any} />
                    </div>

                </article>
            </div>
        </div>
    )
}
