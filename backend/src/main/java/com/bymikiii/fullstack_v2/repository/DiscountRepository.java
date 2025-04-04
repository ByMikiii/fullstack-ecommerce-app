package com.bymikiii.fullstack_v2.repository;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.bymikiii.fullstack_v2.model.Discount;

public interface DiscountRepository extends MongoRepository<Discount, ObjectId> {
    Optional<Discount> findByCode(String code);
}
