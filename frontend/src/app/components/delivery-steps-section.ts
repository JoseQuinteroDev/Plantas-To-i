import { Component, Input } from '@angular/core';
import { BusinessInfo } from '../models/business-info';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-delivery-steps-section',
  template: `
    <section class="section-pad bg-[#f6efe3]">
      <div class="container-soft grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p class="text-sm font-black uppercase tracking-wide text-emerald-700">Servicio a domicilio</p>
          <h2 class="mt-2 text-3xl font-black text-stone-950 sm:text-4xl">Servicio a domicilio y encargos por WhatsApp</h2>
          <p class="mt-5 text-lg leading-8 text-stone-700">Haz tu pedido de forma sencilla. Escríbenos por WhatsApp, cuéntanos qué necesitas y te confirmamos disponibilidad, precio y entrega.</p>
          <a class="btn-primary mt-8" [href]="whatsapp.buildUrl(businessInfo, 'Hola, quería consultar un pedido a domicilio en Málaga.')" target="_blank" rel="noopener">Consultar por WhatsApp</a>
        </div>
        <div class="grid gap-3">
          @for (step of steps; track step; let i = $index) {
            <div class="soft-card flex items-start gap-4 p-5">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-base font-black text-white">{{ i + 1 }}</span>
              <p class="pt-1 text-base font-bold leading-7 text-stone-800">{{ step }}</p>
            </div>
          }
          <p class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-base font-semibold leading-7 text-amber-900">Zonas y condiciones de reparto pendientes de confirmar con la tienda.</p>
        </div>
      </div>
    </section>
  `,
})
export class DeliveryStepsSection {
  @Input() businessInfo: BusinessInfo | null = null;
  steps = [
    'Escríbenos por WhatsApp.',
    'Cuéntanos qué planta, ramo o encargo necesitas.',
    'Confirmamos disponibilidad y precio.',
    'Preparamos tu pedido.',
    'Lo entregamos según zona.',
  ];
  constructor(public whatsapp: WhatsappService) {}
}
