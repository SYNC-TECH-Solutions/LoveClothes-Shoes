export type Product = {
  _id: string;
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  salePrice?: number;
  sizes: string[];
  colors: string[];
  description: string;
  images: string[]; // array of image IDs from placeholder-images.json
  stock: number;
  rating: number;
  reviews: number;
  mainImageUrl: string;
  mainImageHint: string;
  hoverImageUrl: string;
  hoverImageHint: string;
  imageUrls: {
    url: string;
    hint: string;
  }[];
};

export type Category = {
  name: string;
  image: string; // image ID from placeholder-images.json
};

export type Testimonial = {
  name: string;
  handle: string;
  text: string;
  avatar: string; // image ID from placeholder-images.json
};
