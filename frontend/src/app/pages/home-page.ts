import { Component, OnInit, signal } from '@angular/core';
import { CategoryCard } from '../components/category-card';
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
  imports: [HeroSection, CategoryCard, FeaturedProductsSection, DeliveryStepsSection, SpecialOccasionsSection, GallerySection],
  template: `
    <app-hero-section [businessInfo]="businessInfo()" />
    <section class="section-pad bg-[#fbf8f0]">
      <div class="container-soft">
        <div class="mb-8 max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-wide text-emerald-700">Catálogo visual</p>
          <h2 class="mt-2 text-3xl font-bold text-stone-950">Elige por tipo de producto</h2>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((value) => this.categories.set(value));
    this.productService.getFeaturedProducts().subscribe((value) => this.featured.set(value));
    this.businessService.getBusinessInfo().subscribe((value) => this.businessInfo.set(value));
  }

  goCatalog(slug: string) {
    window.location.href = `/catalogo?category=${slug}`;
  }
}
