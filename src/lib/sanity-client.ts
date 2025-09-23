import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'v6a19qus',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2024-07-16', // use a UTC date in YYYY-MM-DD format
})

export async function getAllProducts() {
  const products = await sanityClient.fetch(`*[_type == "product"]{
    _id,
    name,
    brand,
    "category": category->name,
    "subcategory": subcategory->name,
    price,
    salePrice,
    sizes,
    colors,
    description,
    "mainImageUrl": mainImage.asset->url,
    "mainImageHint": mainImage.alt,
    "hoverImageUrl": hoverImage.asset->url,
    "hoverImageHint": hoverImage.alt,
    "imageUrls": images[].asset->{ "url": url, "hint": alt },
    affiliateUrl
  }`);
  return products.map((p: any) => ({...p, id: p._id}));
}

export async function getProductById(id: string) {
    const product = await sanityClient.fetch(`*[_type == "product" && _id == $id][0]{
    _id,
    name,
    brand,
    "category": category->name,
    "subcategory": subcategory->name,
    price,
    salePrice,
    sizes,
    colors,
    description,
    rating,
    reviews,
    "mainImageUrl": mainImage.asset->url,
    "mainImageHint": mainImage.alt,
    "hoverImageUrl": hoverImage.asset->url,
    "hoverImageHint": hoverImage.alt,
    "imageUrls": images[].asset->{ "url": url, "hint": alt },
    affiliateUrl
  }`, { id });

  if (!product) {
    return null;
  }
  
  return {...product, id: product._id};
}

export async function getAllPosts() {
  const posts = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    "mainImageHint": mainImage.alt,
    publishedAt,
    excerpt
  }`);
  return posts;
}

export async function getPostBySlug(slug: string) {
  const post = await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    "mainImageHint": mainImage.alt,
    publishedAt,
    body,
    seoTitle,
    seoDescription
  }`, { slug });
  return post;
}
