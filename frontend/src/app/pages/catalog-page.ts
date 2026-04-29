import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmptyState } from '../components/empty-state';
import { ProductCard } from '../components/product-card';
import { BusinessInfo } from '../models/business-info';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { BusinessInfoService } from '../services/business-info.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog-page',
  imports: [ProductCard, EmptyState],
  template: `
    <main class="section-pad pt-28">
      <div class="container-soft">
        <div class="mb-8 max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wide text-emerald-700">Catálogo</p>
          <h1 class="mt-2 text-4xl font-bold text-stone-950">Plantas, flores y encargos</h1>
          <p class="mt-4 leading-7 text-stone-600">Productos de ejemplo para demo. Precios, stock y zonas deben confirmarse con Plantas Toñi antes de publicarse.</p>
        </div>
        <div class="mb-8 flex gap-2 overflow-x-auto pb-2">
          <button class="shrink-0 rounded-full px-4 py-2 text-sm font-semibold" [class.bg-emerald-800]="selectedCategory() === ''" [class.text-white]="selectedCategory() === ''" [class.bg-white]="selectedCategory() !== ''" (click)="selectCategory('')">Todo</button>
          @for (category of categories(); track category.id) {
            <button class="shrink-0 rounded-full px-4 py-2 text-sm font-semibold shadow-sm" [class.bg-emerald-800]="selectedCategory() === category.slug" [class.text-white]="selectedCategory() === category.slug" [class.bg-white]="selectedCategory() !== category.slug" (click)="selectCategory(category.slug)">{{ category.name }}</button>
          }
        </div>
        @if (products().length) {
          <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            @for (product of products(); track product.id) {
              <app-product-card [product]="product" [businessInfo]="businessInfo()" />
            }
          </div>
        } @else {
          <app-empty-state message="No hay productos en esta categoría todavía." />
        }
      </div>
    </main>
  `,
})
export class CatalogPage implements OnInit {
  categories = signal<Category[]>([]);
  products = signal<Product[]>([]);
  businessInfo = signal<BusinessInfo | null>(null);
  selectedCategory = signal('');

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private businessService: BusinessInfoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((value) => this.categories.set(value));
    this.businessService.getBusinessInfo().subscribe((value) => this.businessInfo.set(value));
    this.route.queryParamMap.subscribe((params) => this.selectCategory(params.get('category') || ''));
  }

  selectCategory(slug: string) {
    this.selectedCategory.set(slug);
    this.productService.getProducts(slug || undefined).subscribe((value) => this.products.set(value));
  }
}
