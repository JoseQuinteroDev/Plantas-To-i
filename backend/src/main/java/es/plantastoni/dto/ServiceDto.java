package es.plantastoni.dto;

public record ServiceDto(Long id, String title, String slug, String description, String iconName, Boolean active, Integer displayOrder) {}
