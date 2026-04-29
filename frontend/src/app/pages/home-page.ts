import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryCard } from '../components/category-card';
import { ContactSection } from '../components/contact-section';
import { DeliveryStepsSection } from '../components/delivery-steps-section';
import { FeaturedProductsSection } from '../components/featured-products-section';
import { GallerySection } from '../components/gallery-section';
import { HeroSection } from '../components/hero-section';
import { SpecialOccasionsSection } from '../components/special-occasions-section';
import { BusinessInfo } from '../models/business-info';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { BusinessInfoService } from '../services/business-info.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, CategoryCard, FeaturedProductsSection, DeliveryStepsSection, SpecialOccasionsSection, GallerySection, ContactSection],
  template: `
    <app-hero-section [businessInfo]="businessInfo()" />

    <section class="section-pad bg-[#fbf7ef]">
      <div class="container-soft">
        <div class="mb-10 max-w-2xl">
          <p class="text-sm font-black uppercase tracking-wide text-emerald-700">Categorías principales</p>
          <h2 class="mt-2 text-3xl font-black text-stone-950 sm:text-4xl">Encuentra rápido lo que buscas</h2>
          <p class="mt-4 text-lg leading-8 text-stone-600">Plantas para casa, exterior, flores frescas, frutales, macetas y encargos especiales en un catálogo visual pensado para móvil.</p>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          @for (category of categories(); track category.id) {
            <app-category-card [category]="category" (selected)="goCatalog($event)" />
          }
        </div>
      </div>
    </section>

    <app-featured-products-section [products]="featured()" [businessInfo]="businessInfo()" />
    <app-delivery-steps-section [businessInfo]="businessInfo()" />
    <app-special-occasions-section [businessInfo]="businessInfo()" />
    <app-gallery-section />
    <app-contact-section [businessInfo]="businessInfo()" />
  `,
})
export class HomePage implements OnInit {
  categories = signal<Category[]>([]);
  featured = signal<Product[]>([]);
  businessInfo = signal<BusinessInfo | null>(null);

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private businessService: BusinessInfoService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((value) => this.categories.set(value));
    this.productService.getFeaturedProducts().subscribe((value) => this.featured.set(value));
    this.businessService.getBusinessInfo().subscribe((value) => this.businessInfo.set(value));
  }

  goCatalog(slug: string) {
    this.router.navigate(['/catalogo'], { queryParams: { category: slug } });
  }
}
