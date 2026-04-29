import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FloatingWhatsappButton } from './components/floating-whatsapp-button';
import { BusinessInfo } from './models/business-info';
import { BusinessInfoService } from './services/business-info.service';
import { WhatsappService } from './services/whatsapp.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FloatingWhatsappButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  businessInfo = signal<BusinessInfo | null>(null);
  menuOpen = signal(false);

  nav = [
    { label: 'Inicio', path: '/' },
    { label: 'Catálogo', path: '/catalogo' },
    { label: 'A domicilio', path: '/servicio-a-domicilio' },
    { label: 'Encargos', path: '/encargos' },
    { label: 'Galería', path: '/galeria' },
    { label: 'Contacto', path: '/contacto' },
  ];

  constructor(private businessService: BusinessInfoService, public whatsapp: WhatsappService) {}

  ngOnInit() {
    this.businessService.getBusinessInfo().subscribe((info) => this.businessInfo.set(info));
  }
}
