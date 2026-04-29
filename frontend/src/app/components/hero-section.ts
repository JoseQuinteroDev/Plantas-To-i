import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BusinessInfo } from '../models/business-info';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  template: `
    <section class="relative isolate min-h-[86svh] overflow-hidden">
      <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1800&q=85" alt="Plantas y flores frescas" class="absolute inset-0 h-full w-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-b from-emerald-950/55 via-emerald-950/25 to-[#fbf8f0]"></div>
      <div class="container-soft relative flex min-h-[86svh] items-end pb-14 pt-28">
        <div class="max-w-3xl text-white">
          <p class="mb-4 inline-flex rounded-full bg-white/18 px-4 py-2 text-sm font-semibold backdrop-blur">Tienda local en Málaga</p>
          <h1 class="text-5xl font-bold leading-tight sm:text-7xl">Plantas Toñi</h1>
          <p class="mt-5 max-w-2xl text-xl leading-8 text-white/92">Plantas, flores y encargos a domicilio en Málaga</p>
          <p class="mt-4 max-w-2xl text-base leading-7 text-white/86">Tu tienda de plantas y flores en Málaga, con atención cercana y encargos personalizados.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a [href]="whatsapp.buildUrl(businessInfo, 'Hola, quería hacer un pedido o encargo en Plantas Toñi.')" target="_blank" rel="noopener" class="rounded-full bg-white px-6 py-3 text-center font-semibold text-emerald-900 shadow-lg">Pedir por WhatsApp</a>
            <a routerLink="/catalogo" class="rounded-full border border-white/70 px-6 py-3 text-center font-semibold text-white backdrop-blur transition hover:bg-white/15">Ver productos</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroSection {
  @Input() businessInfo: BusinessInfo | null = null;
  constructor(public whatsapp: WhatsappService) {}
}
