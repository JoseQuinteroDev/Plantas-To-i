import { Component, Input } from '@angular/core';
import { BusinessInfo } from '../models/business-info';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-special-occasions-section',
  template: `
    <section class="section-pad bg-white">
      <div class="container-soft">
        <div class="mb-8 max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-wide text-emerald-700">Encargos especiales</p>
          <h2 class="mt-2 text-3xl font-bold text-stone-950">Detalles para fechas que importan</h2>
          <p class="mt-4 leading-7 text-stone-600">Ramos, centros y regalos preparados con estilo natural. Todo se confirma antes por WhatsApp.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (item of occasions; track item.title) {
            <article class="rounded-lg bg-[#fbf8f0] p-5 shadow-sm ring-1 ring-emerald-900/5">
              <h3 class="text-xl font-semibold text-stone-900">{{ item.title }}</h3>
              <p class="mt-2 min-h-16 text-sm leading-6 text-stone-600">{{ item.text }}</p>
              <a class="mt-5 inline-flex rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white" [href]="whatsapp.buildUrl(businessInfo, 'Hola, quería consultar un encargo para ' + item.title + '.')" target="_blank" rel="noopener">Consultar</a>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class SpecialOccasionsSection {
  @Input() businessInfo: BusinessInfo | null = null;
  occasions = [
    { title: 'Día de la Madre', text: 'Ramos y plantas bonitas para reservar con antelación y recoger o enviar.' },
    { title: 'San Valentín', text: 'Flores frescas y detalles con mensaje para sorprender sin complicaciones.' },
    { title: 'Cumpleaños', text: 'Regalos naturales, alegres y personalizados según presupuesto.' },
    { title: 'Ramos personalizados', text: 'Colores, estilo y tamaño adaptados a cada ocasión.' },
    { title: 'Eventos', text: 'Centros y composiciones para momentos especiales, sujetos a disponibilidad.' },
    { title: 'Detalles para regalo', text: 'Plantas, macetas y complementos preparados con mimo.' },
  ];
  constructor(public whatsapp: WhatsappService) {}
}
