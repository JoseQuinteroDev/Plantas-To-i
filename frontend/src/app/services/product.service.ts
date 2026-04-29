import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Product } from '../models/product';
import { API_BASE_URL } from './api';
import { demoProducts } from './demo-data';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(category?: string) {
    const fallback = category ? demoProducts.filter((product) => product.category.slug === category) : demoProducts;
    const query = category ? `?category=${category}` : '';
    return this.http.get<Product[]>(`${API_BASE_URL}/products${query}`).pipe(catchError(() => of(fallback)));
  }

  getFeaturedProducts() {
    return this.http.get<Product[]>(`${API_BASE_URL}/products/featured`).pipe(catchError(() => of(demoProducts.filter((product) => product.featured))));
  }
}
