package es.plantastoni.dto;

public record ProductDto(
        Long id,
        String name,
        String slug,
        String shortDescription,
        String longDescription,
        String priceLabel,
        String imageUrl,
        Boolean featured,
        String tag,
        Boolean active,
        CategoryDto category
) {}
