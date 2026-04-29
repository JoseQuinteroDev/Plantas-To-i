# Plantas Toñi

Demo profesional full stack para una web comercial de `Plantas Toñi`, tienda local de plantas, flores, ramos, frutales, accesorios y encargos en Málaga.

La demo funciona como escaparate digital, catálogo visual y canal de pedidos por WhatsApp. No incluye pagos online, autenticación ni panel de administración.

## Estructura

- `backend`: API Spring Boot 3 con Java 17+, JPA, H2, PostgreSQL preparado por perfil y Swagger.
- `frontend`: Angular standalone con Tailwind CSS, diseño responsive y fallback demo si el backend no está activo.
- `docker`: PostgreSQL local opcional para pruebas de producción.

## Levantar Backend

Requisitos: Java 17 o superior.

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

API local:

- `http://localhost:8081/api/categories`
- `http://localhost:8081/api/products`
- `http://localhost:8081/api/products/featured`
- `http://localhost:8081/api/services`
- `http://localhost:8081/api/business-info`
- `POST http://localhost:8081/api/contact-requests`
- Swagger: `http://localhost:8081/swagger-ui.html`
- H2 console: `http://localhost:8081/h2-console`

La demo usa `8081` para evitar conflictos con otros servicios locales. Si quieres usar `8080`:

```powershell
.\mvnw.cmd spring-boot:run "-Dspring-boot.run.arguments=--server.port=8080"
```

En ese caso ajusta `frontend/src/app/services/api.ts` para apuntar al mismo puerto.

Si `JAVA_HOME` apunta a una instalación antigua o inexistente, configúralo a un JDK 17+ antes de arrancar.

## Levantar Frontend

```powershell
cd frontend
npm.cmd install
npm.cmd start
```

Web local: `http://localhost:4200`

El frontend consume el backend desde `http://localhost:8081/api`. Si no está activo, usa datos mock para que la demo visual siga navegable.

## PostgreSQL Opcional

```powershell
cd docker
docker compose up -d
cd ..\backend
$env:SPRING_PROFILES_ACTIVE="prod"
.\mvnw.cmd spring-boot:run
```

Variables preparadas para producción:

- `DATABASE_URL`
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`

## Datos Demo

Incluye categorías de plantas de interior, exterior, flores y ramos, frutales, macetas y encargos especiales.

Productos de ejemplo: orquídea blanca, ramo personalizado, suculentas variadas, planta aromática, centro floral, limonero/frutal, maceta decorativa y plantas de interior variadas.

Servicios demo: servicio a domicilio, encargos por WhatsApp, ramos personalizados, plantas para regalo, fechas especiales y asesoramiento en tienda.

## Notas Importantes

- Teléfono, WhatsApp, email, horario, zonas de reparto y precios están marcados como pendientes de confirmar.
- Los textos legales no son definitivos.
- El objetivo principal es que el usuario vea productos y contacte por WhatsApp.
- El botón de WhatsApp genera mensajes personalizados por producto.
