package com.bymikiii.fullstack_v2.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.bymikiii.fullstack_v2.model.Review;
import java.util.List;

public interface ReviewRepository extends MongoRepository<Review, ObjectId> {
    List<Review> findByCreatorUsername(String creatorUsername);

    List<Review> findByProductId(ObjectId productId);

    Review findByProductIdAndCreatorUsername(ObjectId productId, String creatorUsername);
}
