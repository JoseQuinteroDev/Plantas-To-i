package es.plantastoni.repository;

import es.plantastoni.entity.Product;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByActiveTrueOrderByFeaturedDescNameAsc();
    List<Product> findByActiveTrueAndFeaturedTrueOrderByNameAsc();
    List<Product> findByActiveTrueAndCategorySlugOrderByFeaturedDescNameAsc(String categorySlug);
    Optional<Product> findBySlugAndActiveTrue(String slug);
}
