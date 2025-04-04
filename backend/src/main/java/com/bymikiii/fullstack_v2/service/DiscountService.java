package com.bymikiii.fullstack_v2.service;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bymikiii.fullstack_v2.model.Discount;
import com.bymikiii.fullstack_v2.repository.DiscountRepository;

@Service
public class DiscountService {
    private final DiscountRepository discountRepository;

    public DiscountService(DiscountRepository discountRepository) {
        this.discountRepository = discountRepository;
    }

    public Discount createDiscount(Discount discount) {
        if (discountRepository.findByCode(discount.getCode()).isPresent()) {
            throw new IllegalArgumentException("Discount code already exists.");
        }
        discount.setActive(true);
        this.discountRepository.save(discount);
        return discount;
    }

    public Optional<Discount> getDiscountByCode(String code) {
        return discountRepository.findByCode(code);
    }

}
