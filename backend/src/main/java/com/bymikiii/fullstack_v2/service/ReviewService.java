package com.bymikiii.fullstack_v2.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bymikiii.fullstack_v2.exception.ItemExistsException;
import com.bymikiii.fullstack_v2.exception.ItemNotFoundException;
import com.bymikiii.fullstack_v2.model.Review;
import com.bymikiii.fullstack_v2.repository.ReviewRepository;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public ResponseEntity<List<Review>> getReviewsByProduct(ObjectId productId) {
        return ResponseEntity.ok(this.reviewRepository.findByProductId(productId));
    }

    public ResponseEntity<List<Review>> getReviewsByCreator(ObjectId creatorId) {
        return ResponseEntity.ok(this.reviewRepository.findByCreatorId(creatorId));
    }

    public ResponseEntity<Review> getReviewsByProductAndCreator(ObjectId productId, ObjectId creatorId) {
        return ResponseEntity.ok(this.reviewRepository.findByProductIdAndCreatorId(productId, creatorId));
    }

    public ResponseEntity<Review> saveReview(Review newReview) {
        if (newReview == null) {
            throw new ItemNotFoundException("Review is empty.");
        }
        Review existingReview = this.reviewRepository.findByProductIdAndCreatorId(
                newReview.getProductId(),
                newReview.getCreatorId());

        if (existingReview != null) {
            throw new ItemExistsException("Review already exists.");
        }
        this.reviewRepository.save(newReview);
        return ResponseEntity.status(HttpStatus.CREATED).body(newReview);
    }

    public ResponseEntity<Review> removeReview(ObjectId productId, ObjectId userId) {
        Review existingReview = this.reviewRepository.findByProductIdAndCreatorId(
                productId,
                userId);
        if (existingReview == null) {
            throw new ItemNotFoundException("Review does not exist.");
        }

        reviewRepository.delete(existingReview);
        return ResponseEntity.ok(existingReview);
    }
}
