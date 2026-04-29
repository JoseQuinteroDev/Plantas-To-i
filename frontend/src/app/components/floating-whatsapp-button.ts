import { Component, Input } from '@angular/core';
import { BusinessInfo } from '../models/business-info';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-floating-whatsapp-button',
  template: `
    <a [href]="whatsapp.buildUrl(businessInfo)" target="_blank" rel="noopener"
       class="fixed bottom-3 right-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-sm font-black text-white shadow-[0_16px_40px_rgba(37,211,102,0.35)] transition hover:scale-[1.03] sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3"
       aria-label="Pedir por WhatsApp">
      <span class="flex h-8 w-8 items-center justify-center rounded-full bg-white/18 text-base">W</span>
      <span class="hidden sm:inline">WhatsApp</span>
    </a>
  `,
})
export class FloatingWhatsappButton {
  @Input() businessInfo: BusinessInfo | null = null;
  constructor(public whatsapp: WhatsappService) {}
}
