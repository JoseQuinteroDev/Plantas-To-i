import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BusinessInfo } from '../models/business-info';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  template: `
    <section class="relative overflow-hidden pt-24 sm:pt-28">
      <div class="container-soft grid min-h-[calc(100svh-5rem)] gap-10 pb-12 lg:grid-cols-[1fr_0.86fr] lg:items-center lg:pb-16">
        <div class="max-w-3xl">
          <p class="inline-flex rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-sm font-black text-emerald-800 shadow-sm">Tienda local en Málaga</p>
          <div class="mt-5 overflow-hidden rounded-2xl border border-white/70 bg-white p-2 shadow-sm sm:hidden">
            <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=84" alt="Flores frescas de Plantas Toñi" class="h-36 w-full rounded-2xl object-cover">
          </div>
          <h1 class="mt-6 text-4xl font-black leading-[1.05] text-stone-950 sm:text-5xl lg:text-6xl">Plantas, flores y encargos a domicilio en Málaga</h1>
          <p class="mt-5 max-w-2xl text-lg leading-8 text-stone-700">En Plantas Toñi te ayudamos a encontrar el detalle perfecto: plantas, ramos, flores de temporada y encargos personalizados con atención cercana.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a [href]="whatsapp.buildUrl(businessInfo, 'Hola, quería hacer un pedido o encargo en Plantas Toñi.')" target="_blank" rel="noopener" class="btn-primary">Pedir por WhatsApp</a>
            <a routerLink="/catalogo" class="btn-secondary">Ver catálogo</a>
          </div>
          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            @for (item of trustItems; track item) {
              <div class="rounded-2xl border border-emerald-900/10 bg-white/75 p-4 shadow-sm">
                <p class="text-base font-black text-stone-900">{{ item }}</p>
              </div>
            }
          </div>
        </div>

        <div class="relative hidden sm:block">
          <div class="absolute -left-5 top-10 h-28 w-28 rounded-full bg-[#f0b39f]/35 blur-2xl"></div>
          <div class="absolute -right-3 bottom-8 h-36 w-36 rounded-full bg-emerald-200/45 blur-2xl"></div>
          <div class="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_28px_70px_rgba(57,74,51,0.18)]">
            <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=84" alt="Flores y plantas frescas para Plantas Toñi" class="h-[25rem] w-full rounded-[1.45rem] object-cover sm:h-[31rem] lg:h-[36rem]">
            <div class="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur">
              <p class="text-sm font-black uppercase tracking-wide text-emerald-800">Encargos personalizados</p>
              <p class="mt-1 text-base font-semibold text-stone-700">Ramos, plantas y detalles preparados con mimo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroSection {
  @Input() businessInfo: BusinessInfo | null = null;
  trustItems = ['Tienda local en Málaga', 'Encargos personalizados', 'Servicio a domicilio'];
  constructor(public whatsapp: WhatsappService) {}
}
