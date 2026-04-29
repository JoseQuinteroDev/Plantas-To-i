package es.plantastoni.service;

import es.plantastoni.dto.ProductDto;
import es.plantastoni.exception.ResourceNotFoundException;
import es.plantastoni.mapper.DtoMapper;
import es.plantastoni.repository.ProductRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductCatalogService {
    private final ProductRepository repository;
    private final DtoMapper mapper;

    public ProductCatalogService(ProductRepository repository, DtoMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Transactional(readOnly = true)
    public List<ProductDto> findAll(String category) {
        var products = category == null || category.isBlank()
                ? repository.findByActiveTrueOrderByFeaturedDescNameAsc()
                : repository.findByActiveTrueAndCategorySlugOrderByFeaturedDescNameAsc(category);
        return products.stream().map(mapper::toDto).toList();
    }

    @Transactional(readOnly = true)
    public List<ProductDto> findFeatured() {
        return repository.findByActiveTrueAndFeaturedTrueOrderByNameAsc().stream().map(mapper::toDto).toList();
    }

    @Transactional(readOnly = true)
    public ProductDto findBySlug(String slug) {
        return repository.findBySlugAndActiveTrue(slug).map(mapper::toDto)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado: " + slug));
    }
}
