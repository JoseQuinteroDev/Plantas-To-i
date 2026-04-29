package es.plantastoni.repository;

import es.plantastoni.entity.BusinessInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessInfoRepository extends JpaRepository<BusinessInfo, Long> {}
