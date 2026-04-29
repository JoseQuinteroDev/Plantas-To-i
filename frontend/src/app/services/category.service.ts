import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Category } from '../models/category';
import { API_BASE_URL } from './api';
import { demoCategories } from './demo-data';
import { normalizeCategory } from './visual-assets';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Category[]>(`${API_BASE_URL}/categories`).pipe(
      map((categories) => categories.map(normalizeCategory)),
      catchError(() => of(demoCategories.map(normalizeCategory))),
    );
  }
}
