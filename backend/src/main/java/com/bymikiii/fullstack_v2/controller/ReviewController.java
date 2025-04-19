package com.bymikiii.fullstack_v2.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bymikiii.fullstack_v2.model.Review;
import com.bymikiii.fullstack_v2.service.ReviewService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/creator/{creatorUsername}")
    public ResponseEntity<List<Review>> getReviewByCreator(@PathVariable String creatorUsername) {
        return this.reviewService.getReviewsByCreator(creatorUsername);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getReviewByProduct(@PathVariable ObjectId productId) {
        return this.reviewService.getReviewsByProduct(productId);
    }

    @GetMapping("/product/{productId}/creator/{creatorUsername}")
    public ResponseEntity<Review> getReviewByProductAndCreator(@PathVariable ObjectId productId,
            @PathVariable String creatorUsername) {
        return this.reviewService.getReviewsByProductAndCreator(productId, creatorUsername);
    }

    @PostMapping("/")
    public ResponseEntity<Review> saveReview(@RequestBody Review review) {
        return this.reviewService.saveReview(review);
    }

    @DeleteMapping("/product/{productId}/creator/{creatorUsername}")
    public ResponseEntity<Review> deleteReview(@PathVariable ObjectId productId,
            @PathVariable String creatorUsername) {
        return this.reviewService.removeReview(productId, creatorUsername);
    }
}
