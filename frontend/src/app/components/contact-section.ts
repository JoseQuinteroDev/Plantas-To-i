import { Component, Input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessInfo } from '../models/business-info';
import { ContactService } from '../services/contact.service';
import { WhatsappService } from '../services/whatsapp.service';
import { SafeResourceUrlPipe } from './safe-resource-url.pipe';

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule, SafeResourceUrlPipe],
  template: `
    <section class="section-pad bg-white">
      <div class="container-soft grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p class="text-sm font-black uppercase tracking-wide text-emerald-700">Contacto</p>
          <h2 class="mt-2 text-3xl font-black text-stone-950 sm:text-4xl">Cuéntanos qué necesitas</h2>
          <p class="mt-4 text-lg leading-8 text-stone-600">WhatsApp es el canal principal para confirmar disponibilidad, precio y entrega. También puedes dejar una consulta rápida desde el formulario.</p>

          <div class="mt-8 grid gap-4">
            <div class="soft-card p-5">
              <p class="text-sm font-black uppercase tracking-wide text-stone-500">Dirección</p>
              <p class="mt-2 text-lg font-bold leading-7 text-stone-900">{{ businessInfo?.address || 'C. Cristo de la Epidemia, 82, Málaga' }}</p>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="soft-card p-5">
                <p class="text-sm font-black uppercase tracking-wide text-stone-500">WhatsApp</p>
                <p class="mt-2 text-base font-bold text-stone-900">{{ businessInfo?.whatsappNumber || 'Pendiente de confirmar' }}</p>
              </div>
              <div class="soft-card p-5">
                <p class="text-sm font-black uppercase tracking-wide text-stone-500">Horario</p>
                <p class="mt-2 text-base font-bold text-stone-900">{{ businessInfo?.openingHours || 'Horario pendiente de confirmar' }}</p>
              </div>
            </div>
          </div>

          <div class="mt-5 overflow-hidden rounded-2xl border border-emerald-900/10 bg-[#f6efe3] shadow-sm">
            @if (businessInfo?.googleMapsUrl) {
              <iframe class="h-72 w-full border-0" [src]="businessInfo?.googleMapsUrl | safeResourceUrl" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de Plantas Toñi"></iframe>
            } @else {
              <div class="flex h-72 items-center justify-center p-6 text-center text-base font-bold text-stone-600">Mapa pendiente de confirmar</div>
            }
          </div>
        </div>

        <div class="soft-card p-6 sm:p-8">
          <h3 class="text-2xl font-black text-stone-950">Formulario rápido</h3>
          <p class="mt-2 text-base leading-7 text-stone-600">Te responderemos para concretar disponibilidad y detalles del pedido.</p>
          <form class="mt-6 grid gap-4" [formGroup]="form" (ngSubmit)="submit()">
            <label class="grid gap-2 text-base font-bold text-stone-800">
              Nombre
              <input class="rounded-2xl border border-stone-200 bg-white px-4 py-3.5 text-base outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-700/10" formControlName="name" placeholder="Tu nombre">
            </label>
            <label class="grid gap-2 text-base font-bold text-stone-800">
              Teléfono
              <input class="rounded-2xl border border-stone-200 bg-white px-4 py-3.5 text-base outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-700/10" formControlName="phone" placeholder="Tu teléfono">
            </label>
            <label class="grid gap-2 text-base font-bold text-stone-800">
              Mensaje
              <textarea class="min-h-36 rounded-2xl border border-stone-200 bg-white px-4 py-3.5 text-base outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-700/10" formControlName="message" placeholder="Cuéntanos qué planta, ramo o encargo necesitas"></textarea>
            </label>
            @if (form.invalid && submitted()) {
              <p class="rounded-2xl bg-amber-50 p-4 text-base font-semibold leading-7 text-amber-900">Revisa nombre, teléfono y mensaje. El mensaje debe tener al menos 10 caracteres.</p>
            }
            @if (status()) {
              <p class="rounded-2xl bg-emerald-50 p-4 text-base font-semibold leading-7 text-emerald-900">{{ status() }}</p>
            }
            @if (error()) {
              <p class="rounded-2xl bg-red-50 p-4 text-base font-semibold leading-7 text-red-800">{{ error() }}</p>
            }
            <div class="grid gap-3 sm:grid-cols-2">
              <button class="btn-primary w-full" type="submit">Enviar consulta</button>
              <a class="btn-secondary w-full" [href]="whatsapp.buildUrl(businessInfo, 'Hola, quería contactar con Plantas Toñi.')" target="_blank" rel="noopener">Hablar por WhatsApp</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class ContactSection {
  @Input() businessInfo: BusinessInfo | null = null;
  submitted = signal(false);
  status = signal('');
  error = signal('');
  form;

  constructor(fb: FormBuilder, private contactService: ContactService, public whatsapp: WhatsappService) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      phone: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    });
  }

  submit() {
    this.submitted.set(true);
    this.status.set('');
    this.error.set('');
    if (this.form.invalid) return;
    const value = this.form.getRawValue();
    this.contactService.send({ name: value.name || '', phone: value.phone || '', message: value.message || '' }).subscribe({
      next: (result) => {
        this.status.set(result.fallback ? 'Demo sin backend activo: solicitud simulada correctamente.' : 'Solicitud enviada correctamente.');
        this.form.reset();
        this.submitted.set(false);
      },
      error: () => this.error.set('No se ha podido enviar la consulta. Revisa los datos o prueba por WhatsApp.'),
    });
  }
}
