package com.bymikiii.fullstack_v2.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.bymikiii.fullstack_v2.model.Product;

public interface ProductRepository extends MongoRepository<Product, ObjectId> {
    Product findByName(String name);

    Product findBySlug(String slug);
}
