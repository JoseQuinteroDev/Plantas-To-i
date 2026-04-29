import { Component, Input } from '@angular/core';
import { BusinessInfo } from '../models/business-info';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-delivery-steps-section',
  template: `
    <section class="section-pad bg-[#f4efe4]">
      <div class="container-soft grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-wide text-emerald-700">A domicilio</p>
          <h2 class="mt-2 text-3xl font-bold text-stone-950">Pedidos sencillos por WhatsApp</h2>
          <p class="mt-4 text-stone-650 leading-7">El canal principal es WhatsApp: rápido, cercano y perfecto para confirmar disponibilidad, precio y entrega antes de preparar el pedido.</p>
          <a class="mt-7 inline-flex rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-800" [href]="whatsapp.buildUrl(businessInfo, 'Hola, quería consultar un pedido a domicilio en Málaga.')" target="_blank" rel="noopener">Consultar entrega</a>
        </div>
        <div class="grid gap-3">
          @for (step of steps; track step; let i = $index) {
            <div class="flex gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-emerald-900/5">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">{{ i + 1 }}</span>
              <p class="pt-1 font-medium text-stone-800">{{ step }}</p>
            </div>
          }
          <p class="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">Zonas y disponibilidad pendientes de confirmar con la tienda.</p>
        </div>
      </div>
    </section>
  `,
})
export class DeliveryStepsSection {
  @Input() businessInfo: BusinessInfo | null = null;
  steps = [
    'Escríbenos por WhatsApp.',
    'Indícanos qué planta, ramo o encargo necesitas.',
    'Confirmamos disponibilidad y precio.',
    'Preparamos tu pedido.',
    'Lo entregamos a domicilio según zona.',
  ];
  constructor(public whatsapp: WhatsappService) {}
}
