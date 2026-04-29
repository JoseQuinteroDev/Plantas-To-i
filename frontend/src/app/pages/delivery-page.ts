import { Component, OnInit, signal } from '@angular/core';
import { DeliveryStepsSection } from '../components/delivery-steps-section';
import { BusinessInfo } from '../models/business-info';
import { BusinessInfoService } from '../services/business-info.service';

@Component({
  selector: 'app-delivery-page',
  imports: [DeliveryStepsSection],
  template: `
    <main class="pt-20">
      <section class="bg-white pt-14">
        <div class="container-soft max-w-3xl pb-10">
          <p class="text-sm font-black uppercase tracking-wide text-emerald-700">Servicio a domicilio</p>
          <h1 class="mt-2 text-4xl font-black leading-tight text-stone-950 sm:text-5xl">Pedidos sencillos para Málaga</h1>
          <p class="mt-5 text-lg leading-8 text-stone-600">{{ businessInfo()?.deliveryInfo }}</p>
        </div>
      </section>
      <app-delivery-steps-section [businessInfo]="businessInfo()" />
    </main>
  `,
})
export class DeliveryPage implements OnInit {
  businessInfo = signal<BusinessInfo | null>(null);
  constructor(private businessService: BusinessInfoService) {}
  ngOnInit() {
    this.businessService.getBusinessInfo().subscribe((value) => this.businessInfo.set(value));
  }
}
