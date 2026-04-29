import { Component } from '@angular/core';
import { galleryImages } from '../services/visual-assets';

@Component({
  selector: 'app-gallery-section',
  template: `
    <section class="section-pad bg-[#fbf7ef]">
      <div class="container-soft">
        <div class="mb-10 max-w-2xl">
          <p class="text-sm font-black uppercase tracking-wide text-emerald-700">Galería</p>
          <h2 class="mt-2 text-3xl font-black text-stone-950 sm:text-4xl">Inspiración natural para la tienda</h2>
          <p class="mt-4 text-lg leading-8 text-stone-600">Imágenes coherentes de plantas, flores, ramos, macetas y jardinería preparadas para sustituir por fotos reales.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (image of images; track image.url) {
            <img [src]="image.url" [alt]="image.alt" class="h-64 w-full rounded-2xl object-cover shadow-sm ring-1 ring-emerald-900/5 sm:h-72">
          }
        </div>
      </div>
    </section>
  `,
})
export class GallerySection {
  images = galleryImages;
}
