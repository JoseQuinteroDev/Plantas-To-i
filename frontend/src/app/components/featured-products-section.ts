import { Component, Input } from '@angular/core';
import { BusinessInfo } from '../models/business-info';
import { Product } from '../models/product';
import { ProductCard } from './product-card';

@Component({
  selector: 'app-featured-products-section',
  imports: [ProductCard],
  template: `
    <section class="section-pad bg-white">
      <div class="container-soft">
        <div class="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-emerald-700">Favoritos de la tienda</p>
            <h2 class="mt-2 text-3xl font-bold text-stone-950">Productos destacados</h2>
          </div>
          <p class="max-w-lg text-stone-600">Precios orientativos y disponibilidad siempre pendientes de confirmar por la tienda.</p>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          @for (product of products; track product.id) {
            <app-product-card [product]="product" [businessInfo]="businessInfo" />
          }
        </div>
      </div>
    </section>
  `,
})
export class FeaturedProductsSection {
  @Input() products: Product[] = [];
  @Input() businessInfo: BusinessInfo | null = null;
}
