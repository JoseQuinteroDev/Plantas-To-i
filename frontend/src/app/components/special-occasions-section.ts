import { Component, Input } from '@angular/core';
import { BusinessInfo } from '../models/business-info';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-special-occasions-section',
  template: `
    <section class="section-pad bg-white">
      <div class="container-soft">
        <div class="mb-10 max-w-2xl">
          <p class="text-sm font-black uppercase tracking-wide text-emerald-700">Encargos especiales</p>
          <h2 class="mt-2 text-3xl font-black text-stone-950 sm:text-4xl">Detalles para fechas que importan</h2>
          <p class="mt-4 text-lg leading-8 text-stone-600">Ramos, centros y regalos preparados con estilo natural. Todo se confirma antes por WhatsApp para cuidar disponibilidad, precio y entrega.</p>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          @for (item of occasions; track item.title) {
            <article class="soft-card flex min-h-56 flex-col p-6">
              <p class="text-sm font-black uppercase tracking-wide text-[#bd6f5a]">{{ item.kicker }}</p>
              <h3 class="mt-2 text-2xl font-black text-stone-950">{{ item.title }}</h3>
              <p class="mt-3 flex-1 text-base leading-7 text-stone-600">{{ item.text }}</p>
              <a class="btn-secondary mt-6 w-full text-sm" [href]="whatsapp.buildUrl(businessInfo, 'Hola, quería consultar un encargo para ' + item.title + '.')" target="_blank" rel="noopener">Consultar encargo</a>
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
    { title: 'Día de la Madre', kicker: 'Reserva anticipada', text: 'Ramos y plantas bonitas para recoger o enviar con un detalle especial.' },
    { title: 'San Valentín', kicker: 'Flores con mensaje', text: 'Ramos frescos y detalles románticos preparados por encargo.' },
    { title: 'Cumpleaños', kicker: 'Regalo natural', text: 'Plantas, flores y macetas para sorprender según presupuesto.' },
    { title: 'Ramos personalizados', kicker: 'A medida', text: 'Colores, estilo y tamaño adaptados a cada ocasión.' },
    { title: 'Eventos', kicker: 'Preparación especial', text: 'Centros y composiciones para celebraciones, sujetos a disponibilidad.' },
    { title: 'Detalles para regalo', kicker: 'Con mimo', text: 'Plantas, accesorios y complementos preparados para entregar.' },
  ];
  constructor(public whatsapp: WhatsappService) {}
}
