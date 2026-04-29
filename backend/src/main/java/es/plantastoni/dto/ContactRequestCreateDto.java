package es.plantastoni.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequestCreateDto(
        @NotBlank @Size(min = 2, max = 80) String name,
        @NotBlank @Size(min = 6, max = 20) String phone,
        @NotBlank @Size(min = 10, max = 1000) String message
) {}
