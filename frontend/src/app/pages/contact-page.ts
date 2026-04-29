import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusinessInfo } from '../models/business-info';
import { BusinessInfoService } from '../services/business-info.service';
import { ContactService } from '../services/contact.service';
import { WhatsappService } from '../services/whatsapp.service';
import { SafeResourceUrlPipe } from '../components/safe-resource-url.pipe';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, SafeResourceUrlPipe],
  template: `
    <main class="section-pad pt-28">
      <div class="container-soft grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <section>
          <p class="text-sm font-semibold uppercase tracking-wide text-emerald-700">Contacto</p>
          <h1 class="mt-2 text-4xl font-bold text-stone-950">Hablemos de tu planta, ramo o encargo</h1>
          <div class="mt-8 space-y-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-emerald-900/5">
            <p><strong>Dirección:</strong><br>{{ businessInfo()?.address }}</p>
            <p><strong>Teléfono/WhatsApp:</strong><br>{{ businessInfo()?.whatsappNumber }}</p>
            <p><strong>Horario:</strong><br>{{ businessInfo()?.openingHours }}</p>
            <p><strong>Email:</strong><br>{{ businessInfo()?.email }}</p>
            <a class="inline-flex rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white" [href]="whatsapp.buildUrl(businessInfo(), 'Hola, quería contactar con Plantas Toñi.')" target="_blank" rel="noopener">Contactar por WhatsApp</a>
          </div>
          <div class="mt-5 overflow-hidden rounded-lg bg-stone-200 shadow-sm">
            @if (businessInfo()?.googleMapsUrl) {
              <iframe class="h-72 w-full border-0" [src]="businessInfo()?.googleMapsUrl | safeResourceUrl" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de Plantas Toñi"></iframe>
            } @else {
              <div class="flex h-72 items-center justify-center text-stone-600">Mapa pendiente de confirmar</div>
            }
          </div>
        </section>

        <section class="rounded-lg bg-white p-6 shadow-[0_18px_50px_rgba(59,82,58,0.12)] ring-1 ring-emerald-900/5">
          <h2 class="text-2xl font-bold text-stone-950">Formulario rápido</h2>
          <p class="mt-2 text-sm leading-6 text-stone-600">El canal principal es WhatsApp, pero este formulario guarda una solicitud en el backend.</p>
          <form class="mt-6 grid gap-4" [formGroup]="form" (ngSubmit)="submit()">
            <label class="grid gap-2 text-sm font-semibold text-stone-800">
              Nombre
              <input class="rounded-lg border border-stone-200 px-4 py-3 outline-none focus:border-emerald-600" formControlName="name" placeholder="Tu nombre">
            </label>
            <label class="grid gap-2 text-sm font-semibold text-stone-800">
              Teléfono
              <input class="rounded-lg border border-stone-200 px-4 py-3 outline-none focus:border-emerald-600" formControlName="phone" placeholder="Tu teléfono">
            </label>
            <label class="grid gap-2 text-sm font-semibold text-stone-800">
              Mensaje
              <textarea class="min-h-36 rounded-lg border border-stone-200 px-4 py-3 outline-none focus:border-emerald-600" formControlName="message" placeholder="Cuéntanos qué necesitas"></textarea>
            </label>
            @if (form.invalid && submitted()) {
              <p class="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">Revisa nombre, teléfono y mensaje. El mensaje debe tener al menos 10 caracteres.</p>
            }
            @if (status()) {
              <p class="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900">{{ status() }}</p>
            }
            <button class="rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white disabled:opacity-50" type="submit">Enviar solicitud</button>
          </form>
        </section>
      </div>
    </main>
  `,
})
export class ContactPage implements OnInit {
  businessInfo = signal<BusinessInfo | null>(null);
  submitted = signal(false);
  status = signal('');
  form;

  constructor(
    fb: FormBuilder,
    private businessService: BusinessInfoService,
    private contactService: ContactService,
    public whatsapp: WhatsappService,
  ) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      phone: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    });
  }

  ngOnInit() {
    this.businessService.getBusinessInfo().subscribe((value) => this.businessInfo.set(value));
  }

  submit() {
    this.submitted.set(true);
    this.status.set('');
    if (this.form.invalid) return;
    const value = this.form.getRawValue();
    this.contactService.send({ name: value.name || '', phone: value.phone || '', message: value.message || '' }).subscribe((result) => {
      this.status.set(result.fallback ? 'Demo sin backend activo: solicitud simulada correctamente.' : 'Solicitud enviada correctamente.');
      this.form.reset();
      this.submitted.set(false);
    });
  }
}
