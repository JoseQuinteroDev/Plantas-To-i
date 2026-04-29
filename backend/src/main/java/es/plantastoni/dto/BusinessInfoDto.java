package es.plantastoni.dto;

public record BusinessInfoDto(
        Long id,
        String businessName,
        String address,
        String phone,
        String whatsappNumber,
        String email,
        String openingHours,
        String instagramUrl,
        String googleMapsUrl,
        String deliveryInfo
) {}
