package es.plantastoni.controller;

import es.plantastoni.dto.BusinessInfoDto;
import es.plantastoni.dto.ServiceDto;
import es.plantastoni.service.BusinessCatalogService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class BusinessController {
    private final BusinessCatalogService service;

    public BusinessController(BusinessCatalogService service) {
        this.service = service;
    }

    @GetMapping("/services")
    public List<ServiceDto> services() {
        return service.findServices();
    }

    @GetMapping("/business-info")
    public BusinessInfoDto businessInfo() {
        return service.findBusinessInfo();
    }
}
