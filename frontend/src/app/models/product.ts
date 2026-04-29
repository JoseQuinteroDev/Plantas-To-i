import { Category } from './category';

export interface Product {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  priceLabel: string;
  imageUrl: string;
  featured: boolean;
  tag?: string;
  active: boolean;
  category: Category;
}
