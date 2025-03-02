package com.bymikiii.fullstack_v2.model;

import lombok.Data;
import org.bson.types.ObjectId;
import java.util.List;

@Data
public class Cart {
    private ObjectId id;
    private ObjectId userId;
    private List<CartItem> items;
    private double totalAmount;

    @Data
    public static class CartItem {
        private Product product;
        private String selectedSize;
        private int quantity;
        private double totalPrice;
    }
}
