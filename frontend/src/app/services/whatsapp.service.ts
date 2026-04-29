import { Injectable } from '@angular/core';
import { BusinessInfo } from '../models/business-info';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  buildUrl(info: BusinessInfo | null, message = 'Hola, quería hacer una consulta para Plantas Toñi.'): string {
    const number = this.cleanNumber(info?.whatsappNumber);
    const text = encodeURIComponent(message);
    return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
  }

  productMessage(productName: string): string {
    return `Hola, quería consultar disponibilidad/precio de ${productName}.`;
  }

  hasConfirmedNumber(info: BusinessInfo | null): boolean {
    return Boolean(this.cleanNumber(info?.whatsappNumber));
  }

  private cleanNumber(value?: string): string {
    if (!value || value.toLowerCase().includes('pendiente')) return '';
    return value.replace(/[^\d]/g, '');
  }
}
