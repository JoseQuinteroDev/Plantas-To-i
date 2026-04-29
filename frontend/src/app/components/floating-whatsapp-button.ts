import { Component, Input } from '@angular/core';
import { BusinessInfo } from '../models/business-info';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-floating-whatsapp-button',
  template: `
    <a [href]="whatsapp.buildUrl(businessInfo)" target="_blank" rel="noopener"
       class="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl font-bold text-white shadow-[0_14px_35px_rgba(37,211,102,0.35)] transition hover:scale-105"
       aria-label="Pedir por WhatsApp">
      W
    </a>
  `,
})
export class FloatingWhatsappButton {
  @Input() businessInfo: BusinessInfo | null = null;
  constructor(public whatsapp: WhatsappService) {}
}
