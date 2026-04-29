import { Category } from '../models/category';
import { Product } from '../models/product';

export const categoryImageBySlug: Record<string, string> = {
  'plantas-interior': 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=82',
  'plantas-exterior': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=82',
  'flores-ramos': 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1200&q=82',
  frutales: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=1200&q=82',
  'macetas-accesorios': 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=82',
  'encargos-especiales': 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=82',
};

export const productImageBySlug: Record<string, string> = {
  'orquidea-blanca': 'https://images.unsplash.com/photo-1566907225473-184a0d44b28f?auto=format&fit=crop&w=1200&q=82',
  'ramo-personalizado': 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1200&q=82',
  'suculentas-variadas': 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=1200&q=82',
  'planta-aromatica': 'https://images.unsplash.com/photo-1620803366004-119b57f54cd6?auto=format&fit=crop&w=1200&q=82',
  'centro-floral': 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=82',
  'limonero-frutal': 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=1200&q=82',
  'maceta-decorativa': 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?auto=format&fit=crop&w=1200&q=82',
  'plantas-interior-variadas': 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?auto=format&fit=crop&w=1200&q=82',
};

export const productDisplayOverrides: Record<string, Partial<Product>> = {
  'planta-aromatica': { name: 'Plantas aromáticas' },
  'limonero-frutal': { name: 'Frutales para exterior' },
};

export const featuredProductSlugs = [
  'orquidea-blanca',
  'ramo-personalizado',
  'suculentas-variadas',
  'planta-aromatica',
  'centro-floral',
  'limonero-frutal',
];

export const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=82',
    alt: 'Flores frescas de temporada',
  },
  {
    url: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1200&q=82',
    alt: 'Plantas verdes de interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=82',
    alt: 'Ramo preparado para regalo',
  },
  {
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=82',
    alt: 'Tienda de plantas y jardinería',
  },
  {
    url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=82',
    alt: 'Macetas y plantas decorativas',
  },
  {
    url: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=82',
    alt: 'Flores y ramos coloridos',
  },
];

export function normalizeCategory(category: Category): Category {
  return {
    ...category,
    imageUrl: categoryImageBySlug[category.slug] ?? category.imageUrl,
  };
}

export function normalizeProduct(product: Product): Product {
  const override = productDisplayOverrides[product.slug] ?? {};
  return {
    ...product,
    ...override,
    imageUrl: productImageBySlug[product.slug] ?? product.imageUrl,
    category: normalizeCategory(product.category),
  };
}

export function orderFeaturedProducts(products: Product[], fallbackProducts: Product[]): Product[] {
  const normalized = [...products, ...fallbackProducts].map(normalizeProduct);
  const bySlug = new Map(normalized.map((product) => [product.slug, product]));
  return featuredProductSlugs
    .map((slug) => bySlug.get(slug))
    .filter((product): product is Product => Boolean(product));
}
