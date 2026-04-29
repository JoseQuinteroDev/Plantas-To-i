import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Product } from '../models/product';
import { API_BASE_URL } from './api';
import { demoProducts } from './demo-data';
import { normalizeProduct, orderFeaturedProducts } from './visual-assets';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(category?: string) {
    const fallback = category ? demoProducts.filter((product) => product.category.slug === category) : demoProducts;
    const query = category ? `?category=${category}` : '';
    return this.http.get<Product[]>(`${API_BASE_URL}/products${query}`).pipe(
      map((products) => products.map(normalizeProduct)),
      catchError(() => of(fallback.map(normalizeProduct))),
    );
  }

  getFeaturedProducts() {
    return this.http.get<Product[]>(`${API_BASE_URL}/products/featured`).pipe(
      map((products) => orderFeaturedProducts(products, demoProducts)),
      catchError(() => of(orderFeaturedProducts(demoProducts, []))),
    );
  }
}
