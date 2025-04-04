package com.bymikiii.fullstack_v2.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bymikiii.fullstack_v2.exception.ItemNotFoundException;
import com.bymikiii.fullstack_v2.model.Cart;
import com.bymikiii.fullstack_v2.model.Cart.CartItem;
import com.bymikiii.fullstack_v2.model.Discount;
import com.bymikiii.fullstack_v2.model.Product;
import com.bymikiii.fullstack_v2.repository.CartRepository;

@Service
public class CartService {
    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public ResponseEntity<Integer> getCartItemCount(ObjectId userId) {
        Cart foundCart = this.cartRepository.findByUserId(userId);
        if (foundCart == null) {
            throw new ItemNotFoundException("Cart for this user does not exist!");
        }
        int itemSum = 0;
        for (CartItem cartItem : foundCart.getItems()) {
            itemSum += cartItem.getQuantity();
        }
        return ResponseEntity.ok().body(itemSum);
    }

    public ResponseEntity<Cart> getCart(ObjectId userId) {
        Cart foundCart = this.cartRepository.findByUserId(userId);
        if (foundCart == null) {
            throw new ItemNotFoundException("Cart for this user does not exist!");
        }
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(foundCart);
    }

    public ResponseEntity<Cart> addItemsToCart(ObjectId userId, CartItem newCartItem) {
        Cart cart = this.cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new ItemNotFoundException("Cart for this user does not exist!");
        }
        if (newCartItem == null) {
            return ResponseEntity.badRequest().body(null);
        }
        List<CartItem> cartItems = cart.getItems();
        boolean itemInCart = false;
        for (var cartItem : cartItems) {
            if (cartItem.getProduct().equals(newCartItem.getProduct())
                    & cartItem.getSelectedColor() == newCartItem.getSelectedColor()
                    & cartItem.getSelectedSize().equals(newCartItem.getSelectedSize())) {
                cartItem.setQuantity(cartItem.getQuantity() + newCartItem.getQuantity());
                System.out.println("item already in cart");
                itemInCart = true;
                break;
            }
        }
        if (!itemInCart) {
            cartItems.add(newCartItem);
        }
        System.out.println("item added to cart");
        cart.recalculateTotal();
        this.cartRepository.save(cart);
        return ResponseEntity.ok().body(cart);
    }

    public ResponseEntity<Cart> editCartItem(ObjectId userId, CartItem cartItem) {
        System.out.println(cartItem);
        Cart cart = this.cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new ItemNotFoundException("Cart for this user does not exist!");
        }
        if (cartItem == null) {
            return ResponseEntity.badRequest().body(null);
        }
        List<CartItem> cartItems = cart.getItems();
        if (cartItems == null) {
            cartItems = new ArrayList<>();
        }

        boolean found = false;
        for (CartItem cartItemToEdit : cartItems) {
            System.out.println(cartItemToEdit);
            System.out.println(cartItem);
            if (cartItemToEdit.getProduct().equals(cartItem.getProduct())
                    & cartItemToEdit.getSelectedSize().equals(cartItem.getSelectedSize())
                    & cartItemToEdit.getSelectedColor() == cartItem.getSelectedColor()) {
                cartItemToEdit.setQuantity(cartItem.getQuantity());
                cartItemToEdit.setSelectedColor(cartItem.getSelectedColor());
                found = true;
                break;
            }
        }

        if (!found) {
            return ResponseEntity.notFound().build();
        }

        this.cartRepository.save(cart);
        return ResponseEntity.ok(cart);
    }

    public ResponseEntity<Cart> removeItemsFromCart(ObjectId userId, CartItem cartItemToRemove) {
        Cart cart = this.cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new ItemNotFoundException("Cart for this user does not exist!");
        }
        List<CartItem> cartItems = cart.getItems();

        int originalSize = cartItems.size();

        cartItems.removeIf(cartItem -> cartItem.getProduct() != null &&
                cartItem.getProduct().getId().toString().equals(cartItemToRemove.getProduct().getId().toString()) &&
                Objects.equals(cartItem.getSelectedSize(), cartItemToRemove.getSelectedSize()) &&
                Objects.equals(cartItem.getSelectedColor(), cartItemToRemove.getSelectedColor()));

        if (cartItems.size() < originalSize) {
            cart.recalculateTotal();
            this.cartRepository.save(cart);
            return ResponseEntity.ok().body(cart);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(cart);
        }
    }

    public ResponseEntity<Cart> applyDiscount(ObjectId userId, Discount newDiscount) {
        Cart cart = this.cartRepository.findByUserId(userId);
        if (cart == null | newDiscount == null) {
            throw new ItemNotFoundException("Cart for this user does not exist!");
        }
        cart.setDiscount(newDiscount);
        cart.recalculateTotal();
        this.cartRepository.save(cart);
        return ResponseEntity.ok().body(cart);
    }

    public ResponseEntity<Cart> removeDiscount(ObjectId userId) {
        Cart cart = this.cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new ItemNotFoundException("Cart for this user does not exist!");
        }
        cart.setDiscount(null);
        cart.recalculateTotal();
        this.cartRepository.save(cart);
        return ResponseEntity.ok().body(cart);
    }

}
