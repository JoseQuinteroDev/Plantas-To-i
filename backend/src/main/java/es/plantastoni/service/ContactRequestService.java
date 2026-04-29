package es.plantastoni.service;

import es.plantastoni.dto.ContactRequestCreateDto;
import es.plantastoni.dto.ContactRequestDto;
import es.plantastoni.entity.ContactRequest;
import es.plantastoni.mapper.DtoMapper;
import es.plantastoni.repository.ContactRequestRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactRequestService {
    private final ContactRequestRepository repository;
    private final DtoMapper mapper;

    public ContactRequestService(ContactRequestRepository repository, DtoMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public ContactRequestDto create(ContactRequestCreateDto dto) {
        ContactRequest request = new ContactRequest();
        request.setName(dto.name());
        request.setPhone(dto.phone());
        request.setMessage(dto.message());
        return mapper.toDto(repository.save(request));
    }
}
