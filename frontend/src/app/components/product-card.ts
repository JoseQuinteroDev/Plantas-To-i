import { Component, Input } from '@angular/core';
import { BusinessInfo } from '../models/business-info';
import { Product } from '../models/product';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-product-card',
  template: `
    <article class="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_18px_50px_rgba(59,82,58,0.12)] ring-1 ring-emerald-900/5">
      <div class="relative aspect-[4/3] overflow-hidden">
        <img [src]="product.imageUrl" [alt]="product.name" class="h-full w-full object-cover transition duration-500 group-hover:scale-105">
        @if (product.tag) {
          <span class="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-emerald-800 shadow">{{ product.tag }}</span>
        }
      </div>
      <div class="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-emerald-700">{{ product.category.name }}</p>
          <h3 class="mt-1 text-xl font-semibold text-stone-900">{{ product.name }}</h3>
          <p class="mt-2 text-sm leading-6 text-stone-600">{{ product.shortDescription }}</p>
        </div>
        <div class="mt-auto flex items-center justify-between gap-3">
          <span class="text-base font-bold text-stone-900">{{ product.priceLabel || 'Consultar' }}</span>
          <a class="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
             [href]="whatsapp.buildUrl(businessInfo, whatsapp.productMessage(product.name))" target="_blank" rel="noopener">
            Consultar
          </a>
        </div>
      </div>
    </article>
  `,
})
export class ProductCard {
  @Input({ required: true }) product!: Product;
  @Input() businessInfo: BusinessInfo | null = null;

  constructor(public whatsapp: WhatsappService) {}
}
