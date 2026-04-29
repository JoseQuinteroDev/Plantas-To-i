package es.plantastoni.service;

import es.plantastoni.dto.CategoryDto;
import es.plantastoni.exception.ResourceNotFoundException;
import es.plantastoni.mapper.DtoMapper;
import es.plantastoni.repository.CategoryRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CategoryService {
    private final CategoryRepository repository;
    private final DtoMapper mapper;

    public CategoryService(CategoryRepository repository, DtoMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Transactional(readOnly = true)
    public List<CategoryDto> findAllActive() {
        return repository.findByActiveTrueOrderByDisplayOrderAscNameAsc().stream().map(mapper::toDto).toList();
    }

    @Transactional(readOnly = true)
    public CategoryDto findBySlug(String slug) {
        return repository.findBySlugAndActiveTrue(slug).map(mapper::toDto)
                .orElseThrow(() -> new ResourceNotFoundException("Categoría no encontrada: " + slug));
    }
}
