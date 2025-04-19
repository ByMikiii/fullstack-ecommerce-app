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

    public ResponseEntity<List<Review>> getReviewsByCreator(String creatorUsername) {
        return ResponseEntity.ok(this.reviewRepository.findByCreatorUsername(creatorUsername));
    }

    public ResponseEntity<Review> getReviewsByProductAndCreator(ObjectId productId, String creatorUsername) {
        return ResponseEntity.ok(this.reviewRepository.findByProductIdAndCreatorUsername(productId, creatorUsername));
    }

    public ResponseEntity<Review> saveReview(Review newReview) {
        if (newReview == null) {
            throw new ItemNotFoundException("Review is empty.");
        }
        Review existingReview = this.reviewRepository.findByProductIdAndCreatorUsername(
                newReview.getProductId(),
                newReview.getCreatorUsername());

        if (existingReview != null) {
            throw new ItemExistsException("Review already exists.");
        }
        this.reviewRepository.save(newReview);
        return ResponseEntity.status(HttpStatus.CREATED).body(newReview);
    }

    public ResponseEntity<Review> removeReview(ObjectId productId, String username) {
        Review existingReview = this.reviewRepository.findByProductIdAndCreatorUsername(
                productId,
                username);
        if (existingReview == null) {
            throw new ItemNotFoundException("Review does not exist.");
        }

        reviewRepository.delete(existingReview);
        return ResponseEntity.ok(existingReview);
    }
}
