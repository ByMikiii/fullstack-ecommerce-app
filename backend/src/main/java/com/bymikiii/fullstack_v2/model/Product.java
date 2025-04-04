package com.bymikiii.fullstack_v2.model;

import java.util.List;

import lombok.Getter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Data;

@Data
@Document(collection = "products")
public class Product {
    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId id;

    private String name;
    private String slug;
    private String brand;
    private String description;
    private double price;
    private double salePrice;
    private boolean sale;
    private int quantity;
    private String category;

    private List<SizeOption> sizes;

    public Product() {
    }

    @Getter
    @Data
    public static class SizeOption {
        private String size;
        private int quantity;

        public SizeOption() {

        }

        public void setSize(String size) {
            this.size = size;
        }

        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }

    }

    public void generateSlug() {
        this.slug = this.getName().toLowerCase().replaceAll("\\s+", "-").replaceAll("[^a-z0-9-]", "");
    }

    public ObjectId getId() {
        return this.id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getSlug() {
        return this.slug;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return this.brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return this.price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return this.quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getCategory() {
        return this.category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<SizeOption> getSizes() {
        return this.sizes;
    }

    public void setSizes(List<SizeOption> sizes) {
        this.sizes = sizes;
    }

    public double getSalePrice() {
        return this.salePrice;
    }

    public void setSalePrice(double salePrice) {
        this.salePrice = salePrice;
    }

    public boolean getSale() {
        return this.sale;
    }

    public void setSale(boolean sale) {
        this.sale = sale;
    }

    @Override
    public String toString() {
        return "{" +
                " id='" + getId() + "'" +
                ", name='" + getName() + "'" +
                ", slug='" + getSlug() + "'" +
                ", brand='" + getBrand() + "'" +
                ", description='" + getDescription() + "'" +
                ", price='" + getPrice() + "'" +
                ", salePrice='" + getSalePrice() + "'" +
                ", sale='" + getSale() + "'" +
                ", quantity='" + getQuantity() + "'" +
                ", category='" + getCategory() + "'" +
                ", sizes='" + getSizes() + "'" +
                "}";
    }
}
