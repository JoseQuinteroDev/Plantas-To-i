import { Component, OnInit, signal } from '@angular/core';
import { ContactSection } from '../components/contact-section';
import { BusinessInfo } from '../models/business-info';
import { BusinessInfoService } from '../services/business-info.service';

@Component({
  selector: 'app-contact-page',
  imports: [ContactSection],
  template: `
    <main class="pt-20">
      <app-contact-section [businessInfo]="businessInfo()" />
    </main>
  `,
})
export class ContactPage implements OnInit {
  businessInfo = signal<BusinessInfo | null>(null);
  constructor(private businessService: BusinessInfoService) {}
  ngOnInit() {
    this.businessService.getBusinessInfo().subscribe((value) => this.businessInfo.set(value));
  }
}
