package es.plantastoni.repository;

import es.plantastoni.entity.BusinessService;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessServiceRepository extends JpaRepository<BusinessService, Long> {
    List<BusinessService> findByActiveTrueOrderByDisplayOrderAscTitleAsc();
}
