package es.plantastoni.service;

import es.plantastoni.dto.BusinessInfoDto;
import es.plantastoni.dto.ServiceDto;
import es.plantastoni.exception.ResourceNotFoundException;
import es.plantastoni.mapper.DtoMapper;
import es.plantastoni.repository.BusinessInfoRepository;
import es.plantastoni.repository.BusinessServiceRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BusinessCatalogService {
    private final BusinessServiceRepository serviceRepository;
    private final BusinessInfoRepository infoRepository;
    private final DtoMapper mapper;

    public BusinessCatalogService(BusinessServiceRepository serviceRepository, BusinessInfoRepository infoRepository, DtoMapper mapper) {
        this.serviceRepository = serviceRepository;
        this.infoRepository = infoRepository;
        this.mapper = mapper;
    }

    @Transactional(readOnly = true)
    public List<ServiceDto> findServices() {
        return serviceRepository.findByActiveTrueOrderByDisplayOrderAscTitleAsc().stream().map(mapper::toDto).toList();
    }

    @Transactional(readOnly = true)
    public BusinessInfoDto findBusinessInfo() {
        return infoRepository.findAll().stream().findFirst().map(mapper::toDto)
                .orElseThrow(() -> new ResourceNotFoundException("Información del negocio no configurada."));
    }
}
