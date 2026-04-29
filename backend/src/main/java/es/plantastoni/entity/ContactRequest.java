package es.plantastoni.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.time.Instant;

@Entity
@Table(name = "contact_requests")
public class ContactRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min = 2, max = 80)
    private String name;

    @NotBlank
    @Size(min = 6, max = 20)
    private String phone;

    @NotBlank
    @Size(min = 10, max = 1000)
    @Column(length = 1000)
    private String message;

    private Instant createdAt;

    @Enumerated(EnumType.STRING)
    private ContactRequestStatus status = ContactRequestStatus.NEW;

    @PrePersist
    void onCreate() {
        createdAt = Instant.now();
        if (status == null) status = ContactRequestStatus.NEW;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
    public ContactRequestStatus getStatus() { return status; }
    public void setStatus(ContactRequestStatus status) { this.status = status; }
}
