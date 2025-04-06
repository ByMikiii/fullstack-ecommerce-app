package com.bymikiii.fullstack_v2.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

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
    private final DiscountService discountService;

    public CartService(CartRepository cartRepository, DiscountService discountService) {
        this.cartRepository = cartRepository;
        this.discountService = discountService;
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
        System.out.println(newCartItem);
        boolean itemInCart = false;
        for (var cartItem : cartItems) {
            if (cartItem.getProduct().equals(newCartItem.getProduct())
                    & cartItem.getSelectedColor() == newCartItem.getSelectedColor()
                    & cartItem.getSelectedSize().equals(newCartItem.getSelectedSize())) {
                cartItem.setQuantity(cartItem.getQuantity() + newCartItem.getQuantity());
                itemInCart = true;
                break;
            }
        }
        if (!itemInCart) {
            cartItems.add(newCartItem);
        }
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
                if (cartItemToEdit.getProduct().getSale()) {
                    cartItemToEdit
                            .setTotalPrice(cartItemToEdit.getQuantity() * cartItemToEdit.getProduct().getSalePrice());
                } else {
                    cartItemToEdit.setTotalPrice(cartItemToEdit.getQuantity() * cartItemToEdit.getProduct().getPrice());
                }
                found = true;
                break;
            }
        }

        if (!found) {
            return ResponseEntity.notFound().build();
        }
        cart.recalculateTotal();
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

    public ResponseEntity<Cart> applyDiscount(ObjectId userId, String discountCode) {
        Cart cart = this.cartRepository.findByUserId(userId);
        if (cart == null || discountCode.isEmpty()) {
            throw new ItemNotFoundException("Cart for this user does not exist!");
        }
        Optional<Discount> optionalDiscount = this.discountService.getDiscountByCode(discountCode);
        if (optionalDiscount.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(cart);
        } else {
            Discount foundDiscount = optionalDiscount.get();
            cart.setDiscount(foundDiscount);
            cart.recalculateTotal();
            this.cartRepository.save(cart);
            return ResponseEntity.ok().body(cart);
        }
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
