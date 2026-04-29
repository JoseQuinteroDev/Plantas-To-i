package es.plantastoni.dto;

import es.plantastoni.entity.ContactRequestStatus;
import java.time.Instant;

public record ContactRequestDto(Long id, String name, String phone, String message, Instant createdAt, ContactRequestStatus status) {}
