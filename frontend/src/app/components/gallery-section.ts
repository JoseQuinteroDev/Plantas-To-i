import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  template: `
    <section class="section-pad bg-[#f8f5ed]">
      <div class="container-soft">
        <div class="mb-8">
          <p class="text-sm font-semibold uppercase tracking-wide text-emerald-700">Galería</p>
          <h2 class="mt-2 text-3xl font-bold text-stone-950">Una tienda con vida propia</h2>
        </div>
        <div class="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[230px] md:grid-cols-4">
          @for (image of images; track image.url; let i = $index) {
            <img [src]="image.url" [alt]="image.alt" class="h-full w-full rounded-lg object-cover shadow-sm" [class]="image.featured ? 'md:col-span-2 md:row-span-2 h-full w-full rounded-lg object-cover shadow-sm' : image.wide ? 'md:col-span-2 h-full w-full rounded-lg object-cover shadow-sm' : 'h-full w-full rounded-lg object-cover shadow-sm'">
          }
        </div>
      </div>
    </section>
  `,
})
export class GallerySection {
  images = [
    { url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85', alt: 'Flores frescas', featured: true },
    { url: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80', alt: 'Plantas verdes' },
    { url: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80', alt: 'Ramo preparado' },
    { url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80', alt: 'Tienda de plantas' },
    { url: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=900&q=80', alt: 'Suculentas' },
    { url: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=80', alt: 'Flores de temporada', wide: true },
  ];
}
