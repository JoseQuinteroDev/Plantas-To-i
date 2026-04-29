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
        <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <p class="text-sm font-black uppercase tracking-wide text-emerald-700">Catálogo visual</p>
            <h2 class="mt-2 text-3xl font-black text-stone-950 sm:text-4xl">Productos destacados</h2>
            <p class="mt-4 text-lg leading-8 text-stone-600">Una selección pensada para regalos, hogares y encargos rápidos por WhatsApp.</p>
          </div>
          <p class="max-w-md rounded-2xl bg-[#fbf7ef] p-4 text-base leading-7 text-stone-600">Precios orientativos y disponibilidad pendientes de confirmar con la tienda.</p>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
