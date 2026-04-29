import { Component } from '@angular/core';
import { GallerySection } from '../components/gallery-section';

@Component({
  selector: 'app-gallery-page',
  imports: [GallerySection],
  template: `
    <main class="pt-20">
      <section class="bg-white pt-14">
        <div class="container-soft max-w-3xl pb-8">
          <p class="text-sm font-semibold uppercase tracking-wide text-emerald-700">Galería</p>
          <h1 class="mt-2 text-4xl font-bold text-stone-950">Inspiración para sustituir por fotos reales</h1>
          <p class="mt-4 leading-7 text-stone-600">Imágenes placeholder de alta calidad preparadas para reemplazarse por fotos de tienda, ramos y producto real.</p>
        </div>
      </section>
      <app-gallery-section />
    </main>
  `,
})
export class GalleryPage {}
