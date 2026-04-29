package es.plantastoni.repository;

import es.plantastoni.entity.ContactRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRequestRepository extends JpaRepository<ContactRequest, Long> {}
