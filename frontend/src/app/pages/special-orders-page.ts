import { Component, OnInit, signal } from '@angular/core';
import { SpecialOccasionsSection } from '../components/special-occasions-section';
import { BusinessInfo } from '../models/business-info';
import { BusinessInfoService } from '../services/business-info.service';

@Component({
  selector: 'app-special-orders-page',
  imports: [SpecialOccasionsSection],
  template: `
    <main class="pt-20">
      <section class="bg-[#fbf8f0] pt-14">
        <div class="container-soft max-w-3xl pb-8">
          <p class="text-sm font-semibold uppercase tracking-wide text-emerald-700">Encargos especiales</p>
          <h1 class="mt-2 text-4xl font-bold text-stone-950">Flores y plantas para regalar en Málaga</h1>
          <p class="mt-4 leading-7 text-stone-600">Reserva por WhatsApp para fechas especiales, cumpleaños, eventos y detalles personalizados. Sin pago online en esta demo.</p>
        </div>
      </section>
      <app-special-occasions-section [businessInfo]="businessInfo()" />
    </main>
  `,
})
export class SpecialOrdersPage implements OnInit {
  businessInfo = signal<BusinessInfo | null>(null);
  constructor(private businessService: BusinessInfoService) {}
  ngOnInit() {
    this.businessService.getBusinessInfo().subscribe((value) => this.businessInfo.set(value));
  }
}
