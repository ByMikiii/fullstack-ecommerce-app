package com.bymikiii.fullstack_v2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.bson.types.ObjectId;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

import jakarta.persistence.Id;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.math.BigDecimal;
import java.math.RoundingMode;

@Data
public class Cart {
    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId id;
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId userId;
    private List<CartItem> items;
    private double totalAmount;
    private double discountAmount;
    private double deliveryFee;
    private Discount discount;

    @Data
    public static class CartItem {
        private Product product;
        private String selectedSize;
        private String selectedColor;
        private int quantity;
        private double totalPrice;

        public CartItem() {
        }

        public CartItem(Product product, String selectedSize, String selectedColor, int quantity, double totalPrice) {
            this.product = product;
            this.selectedSize = selectedSize;
            this.selectedColor = selectedColor;
            this.quantity = quantity;
            this.totalPrice = totalPrice;
        }

        public Product getProduct() {
            return this.product;
        }

        public String getSelectedSize() {
            return selectedSize;
        }

        public void setSelectedSize(String selectedSize) {
            this.selectedSize = selectedSize;
        }

        public String getSelectedColor() {
            return selectedColor;
        }

        public void setSelectedColor(String selectedColor) {
            this.selectedColor = selectedColor;
        }

        public int getQuantity() {
            return quantity;
        }

        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }

        public double getTotalPrice() {
            return totalPrice;
        }

        public void setTotalPrice(double totalPrice) {
            this.totalPrice = totalPrice;
        }

    }

    public Cart(ObjectId userId) {
        this.userId = userId;
        this.items = new ArrayList<>();
        this.deliveryFee = 15;
    }

    public Discount getDiscount() {
        return this.discount;
    }

    public void setDiscount(Discount discount) {
        this.discount = discount;
    }

    public void recalculateTotal() {
        this.totalAmount = this.items.stream()
                .mapToDouble(item -> item.getProduct().getSale() ? item.getProduct().getSalePrice() * item.getQuantity()
                        : item.getProduct().getPrice() * item.getQuantity())
                .sum();
        this.totalAmount = Math.round(this.totalAmount * 100.0) / 100.0;
        if (this.discount != null) {
            if (this.discount.isPercentage()) {
                this.discountAmount = this.totalAmount / 100 * (100 - this.discount.getValue());
            } else {
                this.discountAmount = this.totalAmount - this.discount.getValue();
            }
        } else {
            this.discountAmount = totalAmount;
        }

        this.discountAmount = BigDecimal.valueOf(this.discountAmount)
                .setScale(2, RoundingMode.HALF_UP)
                .doubleValue();

        this.totalAmount = BigDecimal.valueOf(this.totalAmount)
                .setScale(2, RoundingMode.HALF_UP)
                .doubleValue();
    }

    public ObjectId getId() {
        return this.id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public ObjectId getUserId() {
        return this.userId;
    }

    public void setUserId(ObjectId userId) {
        this.userId = userId;
    }

    public List<CartItem> getItems() {
        return this.items;
    }

    public void setItems(List<CartItem> items) {
        this.items = items;
    }

    public double getTotalAmount() {
        return this.totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public double getDiscountAmount() {
        return this.discountAmount;
    }

    public void setDiscountAmount(double discountAmount) {
        this.discountAmount = discountAmount;
    }

    public double getDeliveryFee() {
        return this.deliveryFee;
    }

    public void setDeliveryFee(double deliveryFee) {
        this.deliveryFee = deliveryFee;
    }
}
