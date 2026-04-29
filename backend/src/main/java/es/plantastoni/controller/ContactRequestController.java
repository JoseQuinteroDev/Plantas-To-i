package es.plantastoni.controller;

import es.plantastoni.dto.ContactRequestCreateDto;
import es.plantastoni.dto.ContactRequestDto;
import es.plantastoni.service.ContactRequestService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact-requests")
public class ContactRequestController {
    private final ContactRequestService service;

    public ContactRequestController(ContactRequestService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ContactRequestDto create(@Valid @RequestBody ContactRequestCreateDto dto) {
        return service.create(dto);
    }
}
