package es.plantastoni.dto;

public record CategoryDto(Long id, String name, String slug, String description, String imageUrl, Integer displayOrder, Boolean active) {}
