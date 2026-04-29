package es.plantastoni.controller;

import es.plantastoni.dto.ProductDto;
import es.plantastoni.service.ProductCatalogService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductCatalogService service;

    public ProductController(ProductCatalogService service) {
        this.service = service;
    }

    @GetMapping
    public List<ProductDto> all(@RequestParam(required = false) String category) {
        return service.findAll(category);
    }

    @GetMapping("/featured")
    public List<ProductDto> featured() {
        return service.findFeatured();
    }

    @GetMapping("/{slug}")
    public ProductDto bySlug(@PathVariable String slug) {
        return service.findBySlug(slug);
    }
}
