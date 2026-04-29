import { Routes } from '@angular/router';
import { CatalogPage } from './pages/catalog-page';
import { ContactPage } from './pages/contact-page';
import { DeliveryPage } from './pages/delivery-page';
import { GalleryPage } from './pages/gallery-page';
import { HomePage } from './pages/home-page';
import { SpecialOrdersPage } from './pages/special-orders-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'catalogo', component: CatalogPage },
  { path: 'servicio-a-domicilio', component: DeliveryPage },
  { path: 'encargos', component: SpecialOrdersPage },
  { path: 'galeria', component: GalleryPage },
  { path: 'contacto', component: ContactPage },
  { path: '**', redirectTo: '' },
];
