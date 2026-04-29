package es.plantastoni.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "business_info")
public class BusinessInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String businessName;
    private String address;
    private String phone;
    private String whatsappNumber;
    private String email;
    private String openingHours;
    private String instagramUrl;
    private String googleMapsUrl;
    @Column(length = 1200)
    private String deliveryInfo;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getBusinessName() { return businessName; }
    public void setBusinessName(String businessName) { this.businessName = businessName; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getWhatsappNumber() { return whatsappNumber; }
    public void setWhatsappNumber(String whatsappNumber) { this.whatsappNumber = whatsappNumber; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getOpeningHours() { return openingHours; }
    public void setOpeningHours(String openingHours) { this.openingHours = openingHours; }
    public String getInstagramUrl() { return instagramUrl; }
    public void setInstagramUrl(String instagramUrl) { this.instagramUrl = instagramUrl; }
    public String getGoogleMapsUrl() { return googleMapsUrl; }
    public void setGoogleMapsUrl(String googleMapsUrl) { this.googleMapsUrl = googleMapsUrl; }
    public String getDeliveryInfo() { return deliveryInfo; }
    public void setDeliveryInfo(String deliveryInfo) { this.deliveryInfo = deliveryInfo; }
}
