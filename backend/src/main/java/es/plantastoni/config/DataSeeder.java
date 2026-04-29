package es.plantastoni.config;

import es.plantastoni.entity.BusinessInfo;
import es.plantastoni.entity.BusinessService;
import es.plantastoni.entity.Category;
import es.plantastoni.entity.Product;
import es.plantastoni.repository.BusinessInfoRepository;
import es.plantastoni.repository.BusinessServiceRepository;
import es.plantastoni.repository.CategoryRepository;
import es.plantastoni.repository.ProductRepository;
import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {
    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final BusinessServiceRepository serviceRepository;
    private final BusinessInfoRepository businessInfoRepository;

    public DataSeeder(CategoryRepository categoryRepository, ProductRepository productRepository,
                      BusinessServiceRepository serviceRepository, BusinessInfoRepository businessInfoRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.serviceRepository = serviceRepository;
        this.businessInfoRepository = businessInfoRepository;
    }

    @Override
    public void run(String... args) {
        if (categoryRepository.count() > 0) return;

        Map<String, Category> categories = new LinkedHashMap<>();
        categories.put("plantas-interior", category("Plantas de interior", "plantas-interior", "Verdes, resistentes y decorativas para llenar de vida cualquier rincón.", "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80", 1));
        categories.put("plantas-exterior", category("Plantas de exterior", "plantas-exterior", "Opciones para terrazas, patios y balcones con espíritu mediterráneo.", "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80", 2));
        categories.put("flores-ramos", category("Flores y ramos", "flores-ramos", "Ramos frescos, centros y detalles preparados con mimo.", "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=80", 3));
        categories.put("frutales", category("Frutales", "frutales", "Frutales y cítricos para exterior, sujetos a temporada y disponibilidad.", "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80", 4));
        categories.put("macetas-accesorios", category("Macetas y accesorios", "macetas-accesorios", "Macetas decorativas, complementos y básicos para el cuidado diario.", "https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?auto=format&fit=crop&w=1200&q=80", 5));
        categories.put("encargos-especiales", category("Encargos especiales", "encargos-especiales", "Preparaciones para fechas señaladas, regalos y ocasiones especiales.", "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80", 6));
        categoryRepository.saveAll(categories.values());

        productRepository.save(product("Orquídea blanca", "orquidea-blanca", "Elegante, luminosa y perfecta para regalar.", "Orquídea blanca presentada con cuidado. Disponibilidad y formato sujetos a temporada.", "Desde 18 €", "https://images.unsplash.com/photo-1566907225473-184a0d44b28f?auto=format&fit=crop&w=1200&q=80", true, "Ideal regalo", categories.get("plantas-interior")));
        productRepository.save(product("Ramo personalizado", "ramo-personalizado", "Ramo preparado por encargo según colores, ocasión y presupuesto.", "Cuéntanos qué necesitas y preparamos una propuesta fresca y cercana.", "Desde 25 €", "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1200&q=80", true, "Encargo", categories.get("flores-ramos")));
        productRepository.save(product("Suculentas variadas", "suculentas-variadas", "Pequeñas, resistentes y fáciles de cuidar.", "Ideales para detalles, escritorios y rincones luminosos.", "Desde 3 €", "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=1200&q=80", true, "Fácil cuidado", categories.get("plantas-interior")));
        productRepository.save(product("Planta aromática", "planta-aromatica", "Aromáticas de temporada para cocina, terraza o balcón.", "Consulta variedad disponible: romero, lavanda, hierbabuena u otras según temporada.", "Desde 5 €", "https://images.unsplash.com/photo-1620803366004-119b57f54cd6?auto=format&fit=crop&w=1200&q=80", false, "Temporada", categories.get("plantas-exterior")));
        productRepository.save(product("Centro floral", "centro-floral", "Composición especial para regalar o decorar una celebración.", "Centro preparado por encargo con flores disponibles y acabado personalizado.", "Desde 30 €", "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80", true, "Especial", categories.get("encargos-especiales")));
        productRepository.save(product("Limonero/frutal", "limonero-frutal", "Frutal para exterior, sujeto a tamaño y disponibilidad.", "Una opción mediterránea para patios y terrazas. Consultar stock antes de pasar por tienda.", "Consultar", "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=1200&q=80", false, "Exterior", categories.get("frutales")));
        productRepository.save(product("Maceta decorativa", "maceta-decorativa", "Macetas para vestir tus plantas con estilo natural.", "Modelos y medidas pendientes de confirmar según stock en tienda.", "Desde 6 €", "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80", false, "A domicilio", categories.get("macetas-accesorios")));
        productRepository.save(product("Plantas de interior variadas", "plantas-interior-variadas", "Selección cambiante de plantas verdes para casa.", "Te ayudamos a elegir según luz, espacio y experiencia de cuidado.", "Desde 8 €", "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?auto=format&fit=crop&w=1200&q=80", true, "Destacado", categories.get("plantas-interior")));

        serviceRepository.save(service("Servicio a domicilio", "servicio-a-domicilio", "Entrega disponible en Málaga según zona, horario y disponibilidad pendiente de confirmar.", "truck", 1));
        serviceRepository.save(service("Encargos por WhatsApp", "encargos-whatsapp", "Consulta disponibilidad, precio orientativo y preparación directamente por WhatsApp.", "message-circle", 2));
        serviceRepository.save(service("Ramos personalizados", "ramos-personalizados", "Ramos preparados para regalo, aniversarios, cumpleaños y detalles especiales.", "flower", 3));
        serviceRepository.save(service("Plantas para regalo", "plantas-para-regalo", "Te orientamos para elegir una planta bonita y adecuada para cada persona.", "gift", 4));
        serviceRepository.save(service("Fechas especiales", "fechas-especiales", "Día de la Madre, San Valentín y campañas de temporada con encargos anticipados.", "calendar", 5));
        serviceRepository.save(service("Asesoramiento en tienda", "asesoramiento-tienda", "Atención cercana para elegir plantas según luz, cuidados y espacio.", "leaf", 6));

        BusinessInfo info = new BusinessInfo();
        info.setBusinessName("Plantas Toñi");
        info.setAddress("C. Cristo de la Epidemia, 82, Málaga");
        info.setPhone("Pendiente de confirmar");
        info.setWhatsappNumber("Pendiente de confirmar");
        info.setEmail("Pendiente de confirmar");
        info.setOpeningHours("Horario pendiente de confirmar");
        info.setInstagramUrl("Pendiente de confirmar");
        info.setGoogleMapsUrl("https://www.google.com/maps?q=C.%20Cristo%20de%20la%20Epidemia%2082%20Malaga&output=embed");
        info.setDeliveryInfo("Servicio a domicilio disponible. Zonas y condiciones pendientes de confirmar.");
        businessInfoRepository.save(info);
    }

    private Category category(String name, String slug, String description, String imageUrl, int order) {
        Category category = new Category();
        category.setName(name);
        category.setSlug(slug);
        category.setDescription(description);
        category.setImageUrl(imageUrl);
        category.setDisplayOrder(order);
        return category;
    }

    private Product product(String name, String slug, String shortDescription, String longDescription, String priceLabel,
                            String imageUrl, boolean featured, String tag, Category category) {
        Product product = new Product();
        product.setName(name);
        product.setSlug(slug);
        product.setShortDescription(shortDescription);
        product.setLongDescription(longDescription);
        product.setPriceLabel(priceLabel);
        product.setImageUrl(imageUrl);
        product.setFeatured(featured);
        product.setTag(tag);
        product.setCategory(category);
        return product;
    }

    private BusinessService service(String title, String slug, String description, String iconName, int order) {
        BusinessService service = new BusinessService();
        service.setTitle(title);
        service.setSlug(slug);
        service.setDescription(description);
        service.setIconName(iconName);
        service.setDisplayOrder(order);
        return service;
    }
}
