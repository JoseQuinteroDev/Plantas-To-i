import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
        <div class="mb-10 max-w-3xl">
          <p class="text-sm font-black uppercase tracking-wide text-emerald-700">Catálogo</p>
          <h1 class="mt-2 text-4xl font-black leading-tight text-stone-950 sm:text-5xl">Plantas, flores y encargos para consultar por WhatsApp</h1>
          <p class="mt-5 text-lg leading-8 text-stone-600">Explora productos demo agrupados por categoría. Precios, stock y zonas deben confirmarse con Plantas Toñi antes de publicarse.</p>
        </div>
        <div class="mb-10 flex flex-wrap gap-2 pb-2">
          <button class="rounded-full px-5 py-3 text-base font-black shadow-sm transition"
                  [class.bg-emerald-800]="selectedCategory() === ''"
                  [class.text-white]="selectedCategory() === ''"
                  [class.bg-white]="selectedCategory() !== ''"
                  [class.text-stone-800]="selectedCategory() !== ''"
                  (click)="selectCategory('')">
            Todo
          </button>
          @for (category of categories(); track category.id) {
            <button class="rounded-full px-5 py-3 text-base font-black shadow-sm transition"
                    [class.bg-emerald-800]="selectedCategory() === category.slug"
                    [class.text-white]="selectedCategory() === category.slug"
                    [class.bg-white]="selectedCategory() !== category.slug"
                    [class.text-stone-800]="selectedCategory() !== category.slug"
                    (click)="selectCategory(category.slug)">
              {{ category.name }}
            </button>
          }
        </div>
        @if (products().length) {
          <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    private router: Router,
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((value) => this.categories.set(value));
    this.businessService.getBusinessInfo().subscribe((value) => this.businessInfo.set(value));
    this.route.queryParamMap.subscribe((params) => this.loadCategory(params.get('category') || ''));
  }

  selectCategory(slug: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: slug ? { category: slug } : {},
    });
  }

  private loadCategory(slug: string) {
    this.selectedCategory.set(slug);
    this.productService.getProducts(slug || undefined).subscribe((value) => this.products.set(value));
  }
}
