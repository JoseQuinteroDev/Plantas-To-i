package es.plantastoni.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    @Bean
    OpenAPI plantastoniOpenApi() {
        return new OpenAPI().info(new Info()
                .title("Plantas Toñi API")
                .version("1.0.0")
                .description("API demo para catálogo, servicios, información comercial y solicitudes de contacto."));
    }
}
