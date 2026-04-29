import { Component } from '@angular/core';
import { GallerySection } from '../components/gallery-section';

@Component({
  selector: 'app-gallery-page',
  imports: [GallerySection],
  template: `
    <main class="pt-20">
      <app-gallery-section />
    </main>
  `,
})
export class GalleryPage {}
