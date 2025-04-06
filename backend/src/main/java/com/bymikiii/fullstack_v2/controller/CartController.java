package com.bymikiii.fullstack_v2.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bymikiii.fullstack_v2.model.Cart;
import com.bymikiii.fullstack_v2.model.Discount;
import com.bymikiii.fullstack_v2.model.Cart.CartItem;
import com.bymikiii.fullstack_v2.service.CartService;

import jakarta.websocket.server.PathParam;

import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/count/{userId}")
    public ResponseEntity<Integer> getCartItemCount(@PathVariable ObjectId userId) {
        return this.cartService.getCartItemCount(userId);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Cart> getCartItems(@PathVariable ObjectId userId) {
        return this.cartService.getCart(userId);
    }

    @PostMapping("/{userId}")
    public ResponseEntity<Cart> addCartItem(@PathVariable ObjectId userId, @RequestBody CartItem cartItem) {
        return this.cartService.addItemsToCart(userId, cartItem);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<Cart> editCartItem(@PathVariable ObjectId userId, @RequestBody CartItem cartItem) {
        return this.cartService.editCartItem(userId, cartItem);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Cart> removeCartItem(@PathVariable ObjectId userId, @RequestBody CartItem cartItem) {
        return this.cartService.removeItemsFromCart(userId, cartItem);
    }

    @PutMapping("/{userId}/discount/{discountCode}")
    public ResponseEntity<Cart> applyDiscount(@PathVariable ObjectId userId, @PathVariable String discountCode) {
        return this.cartService.applyDiscount(userId, discountCode);
    }

    @DeleteMapping("/{userId}/discount")
    public ResponseEntity<Cart> removeDiscount(@PathVariable ObjectId userId) {
        return this.cartService.removeDiscount(userId);
    }

}
