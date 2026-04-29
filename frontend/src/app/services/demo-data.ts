import { BusinessInfo } from '../models/business-info';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { ServiceItem } from '../models/service-item';

export const demoCategories: Category[] = [
  { id: 1, name: 'Plantas de interior', slug: 'plantas-interior', description: 'Verdes, resistentes y decorativas para llenar de vida cualquier rincón.', imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80', displayOrder: 1, active: true },
  { id: 2, name: 'Plantas de exterior', slug: 'plantas-exterior', description: 'Opciones para terrazas, patios y balcones con espíritu mediterráneo.', imageUrl: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80', displayOrder: 2, active: true },
  { id: 3, name: 'Flores y ramos', slug: 'flores-ramos', description: 'Ramos frescos, centros y detalles preparados con mimo.', imageUrl: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=80', displayOrder: 3, active: true },
  { id: 4, name: 'Frutales', slug: 'frutales', description: 'Frutales y cítricos para exterior, sujetos a temporada y disponibilidad.', imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80', displayOrder: 4, active: true },
  { id: 5, name: 'Macetas y accesorios', slug: 'macetas-accesorios', description: 'Macetas decorativas, complementos y básicos para el cuidado diario.', imageUrl: 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?auto=format&fit=crop&w=1200&q=80', displayOrder: 5, active: true },
  { id: 6, name: 'Encargos especiales', slug: 'encargos-especiales', description: 'Preparaciones para fechas señaladas, regalos y ocasiones especiales.', imageUrl: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80', displayOrder: 6, active: true },
];

export const demoProducts: Product[] = [
  { id: 1, name: 'Orquídea blanca', slug: 'orquidea-blanca', shortDescription: 'Elegante, luminosa y perfecta para regalar.', longDescription: 'Orquídea blanca presentada con cuidado. Disponibilidad y formato sujetos a temporada.', priceLabel: 'Desde 18 €', imageUrl: 'https://images.unsplash.com/photo-1566907225473-184a0d44b28f?auto=format&fit=crop&w=1200&q=80', featured: true, tag: 'Ideal regalo', active: true, category: demoCategories[0] },
  { id: 2, name: 'Ramo personalizado', slug: 'ramo-personalizado', shortDescription: 'Ramo preparado por encargo según colores, ocasión y presupuesto.', longDescription: 'Cuéntanos qué necesitas y preparamos una propuesta fresca y cercana.', priceLabel: 'Desde 25 €', imageUrl: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1200&q=80', featured: true, tag: 'Encargo', active: true, category: demoCategories[2] },
  { id: 3, name: 'Suculentas variadas', slug: 'suculentas-variadas', shortDescription: 'Pequeñas, resistentes y fáciles de cuidar.', longDescription: 'Ideales para detalles, escritorios y rincones luminosos.', priceLabel: 'Desde 3 €', imageUrl: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=1200&q=80', featured: true, tag: 'Fácil cuidado', active: true, category: demoCategories[0] },
  { id: 4, name: 'Planta aromática', slug: 'planta-aromatica', shortDescription: 'Aromáticas de temporada para cocina, terraza o balcón.', longDescription: 'Consulta variedad disponible según temporada.', priceLabel: 'Desde 5 €', imageUrl: 'https://images.unsplash.com/photo-1620803366004-119b57f54cd6?auto=format&fit=crop&w=1200&q=80', featured: false, tag: 'Temporada', active: true, category: demoCategories[1] },
  { id: 5, name: 'Centro floral', slug: 'centro-floral', shortDescription: 'Composición especial para regalar o decorar una celebración.', longDescription: 'Centro preparado por encargo con flores disponibles y acabado personalizado.', priceLabel: 'Desde 30 €', imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80', featured: true, tag: 'Especial', active: true, category: demoCategories[5] },
  { id: 6, name: 'Limonero/frutal', slug: 'limonero-frutal', shortDescription: 'Frutal para exterior, sujeto a tamaño y disponibilidad.', longDescription: 'Una opción mediterránea para patios y terrazas.', priceLabel: 'Consultar', imageUrl: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=1200&q=80', featured: false, tag: 'Exterior', active: true, category: demoCategories[3] },
  { id: 7, name: 'Maceta decorativa', slug: 'maceta-decorativa', shortDescription: 'Macetas para vestir tus plantas con estilo natural.', longDescription: 'Modelos y medidas pendientes de confirmar según stock.', priceLabel: 'Desde 6 €', imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80', featured: false, tag: 'A domicilio', active: true, category: demoCategories[4] },
  { id: 8, name: 'Plantas de interior variadas', slug: 'plantas-interior-variadas', shortDescription: 'Selección cambiante de plantas verdes para casa.', longDescription: 'Te ayudamos a elegir según luz, espacio y experiencia de cuidado.', priceLabel: 'Desde 8 €', imageUrl: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?auto=format&fit=crop&w=1200&q=80', featured: true, tag: 'Destacado', active: true, category: demoCategories[0] },
];

export const demoServices: ServiceItem[] = [
  { id: 1, title: 'Servicio a domicilio', slug: 'servicio-a-domicilio', description: 'Entrega disponible en Málaga según zona, horario y disponibilidad pendiente de confirmar.', iconName: 'truck', active: true, displayOrder: 1 },
  { id: 2, title: 'Encargos por WhatsApp', slug: 'encargos-whatsapp', description: 'Consulta disponibilidad, precio orientativo y preparación directamente por WhatsApp.', iconName: 'message-circle', active: true, displayOrder: 2 },
  { id: 3, title: 'Ramos personalizados', slug: 'ramos-personalizados', description: 'Ramos preparados para regalo, aniversarios, cumpleaños y detalles especiales.', iconName: 'flower', active: true, displayOrder: 3 },
  { id: 4, title: 'Plantas para regalo', slug: 'plantas-para-regalo', description: 'Te orientamos para elegir una planta bonita y adecuada para cada persona.', iconName: 'gift', active: true, displayOrder: 4 },
  { id: 5, title: 'Fechas especiales', slug: 'fechas-especiales', description: 'Día de la Madre, San Valentín y campañas de temporada con encargos anticipados.', iconName: 'calendar', active: true, displayOrder: 5 },
  { id: 6, title: 'Asesoramiento en tienda', slug: 'asesoramiento-tienda', description: 'Atención cercana para elegir plantas según luz, cuidados y espacio.', iconName: 'leaf', active: true, displayOrder: 6 },
];

export const demoBusinessInfo: BusinessInfo = {
  id: 1,
  businessName: 'Plantas Toñi',
  address: 'C. Cristo de la Epidemia, 82, Málaga',
  phone: 'Pendiente de confirmar',
  whatsappNumber: 'Pendiente de confirmar',
  email: 'Pendiente de confirmar',
  openingHours: 'Horario pendiente de confirmar',
  instagramUrl: 'Pendiente de confirmar',
  googleMapsUrl: 'https://www.google.com/maps?q=C.%20Cristo%20de%20la%20Epidemia%2082%20Malaga&output=embed',
  deliveryInfo: 'Servicio a domicilio disponible. Zonas y condiciones pendientes de confirmar.',
};
