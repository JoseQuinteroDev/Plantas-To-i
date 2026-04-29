package es.plantastoni.mapper;

import es.plantastoni.dto.BusinessInfoDto;
import es.plantastoni.dto.CategoryDto;
import es.plantastoni.dto.ContactRequestDto;
import es.plantastoni.dto.ProductDto;
import es.plantastoni.dto.ServiceDto;
import es.plantastoni.entity.BusinessInfo;
import es.plantastoni.entity.BusinessService;
import es.plantastoni.entity.Category;
import es.plantastoni.entity.ContactRequest;
import es.plantastoni.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class DtoMapper {
    public CategoryDto toDto(Category category) {
        return new CategoryDto(category.getId(), category.getName(), category.getSlug(), category.getDescription(),
                category.getImageUrl(), category.getDisplayOrder(), category.getActive());
    }

    public ProductDto toDto(Product product) {
        return new ProductDto(product.getId(), product.getName(), product.getSlug(), product.getShortDescription(),
                product.getLongDescription(), product.getPriceLabel(), product.getImageUrl(), product.getFeatured(),
                product.getTag(), product.getActive(), toDto(product.getCategory()));
    }

    public ServiceDto toDto(BusinessService service) {
        return new ServiceDto(service.getId(), service.getTitle(), service.getSlug(), service.getDescription(),
                service.getIconName(), service.getActive(), service.getDisplayOrder());
    }

    public BusinessInfoDto toDto(BusinessInfo info) {
        return new BusinessInfoDto(info.getId(), info.getBusinessName(), info.getAddress(), info.getPhone(),
                info.getWhatsappNumber(), info.getEmail(), info.getOpeningHours(), info.getInstagramUrl(),
                info.getGoogleMapsUrl(), info.getDeliveryInfo());
    }

    public ContactRequestDto toDto(ContactRequest request) {
        return new ContactRequestDto(request.getId(), request.getName(), request.getPhone(), request.getMessage(),
                request.getCreatedAt(), request.getStatus());
    }
}
