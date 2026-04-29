package es.plantastoni.controller;

import es.plantastoni.dto.CategoryDto;
import es.plantastoni.service.CategoryService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryService service;

    public CategoryController(CategoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<CategoryDto> all() {
        return service.findAllActive();
    }

    @GetMapping("/{slug}")
    public CategoryDto bySlug(@PathVariable String slug) {
        return service.findBySlug(slug);
    }
}
