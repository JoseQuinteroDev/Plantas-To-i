import { Component, Input } from '@angular/core';
import { BusinessInfo } from '../models/business-info';
import { Product } from '../models/product';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-product-card',
  template: `
    <article class="soft-card group flex h-full flex-col overflow-hidden">
      <div class="relative overflow-hidden p-2 pb-0">
        <img [src]="product.imageUrl" [alt]="product.name" class="h-56 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.03]">
        @if (product.tag) {
          <span class="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-sm font-black text-emerald-800 shadow-sm">{{ product.tag }}</span>
        }
      </div>
      <div class="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p class="text-sm font-black uppercase tracking-wide text-emerald-700">{{ product.category.name }}</p>
          <h3 class="mt-1 text-2xl font-black leading-tight text-stone-950">{{ product.name }}</h3>
          <p class="mt-3 text-base leading-7 text-stone-600">{{ product.shortDescription }}</p>
        </div>
        <div class="mt-auto grid gap-4">
          <div class="flex items-center justify-between gap-3 border-t border-stone-200 pt-4">
            <span class="text-sm font-bold text-stone-500">Precio orientativo</span>
            <span class="text-lg font-black text-stone-950">{{ product.priceLabel || 'Consultar' }}</span>
          </div>
          <a class="btn-primary w-full text-sm"
             [href]="whatsapp.buildUrl(businessInfo, whatsapp.productMessage(product.name))" target="_blank" rel="noopener">
            Consultar por WhatsApp
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
