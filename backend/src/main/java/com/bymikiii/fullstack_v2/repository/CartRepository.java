package com.bymikiii.fullstack_v2.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.bymikiii.fullstack_v2.model.Cart;

public interface CartRepository extends MongoRepository<Cart, ObjectId> {
    Cart findByUserId(ObjectId userId);
}
