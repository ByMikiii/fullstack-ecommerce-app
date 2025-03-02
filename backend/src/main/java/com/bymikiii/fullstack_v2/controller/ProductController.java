package com.bymikiii.fullstack_v2.controller;

import org.springframework.web.bind.annotation.RestController;

import com.bymikiii.fullstack_v2.exception.ItemExistsException;
import com.bymikiii.fullstack_v2.exception.ItemNotFoundException;
import com.bymikiii.fullstack_v2.model.Product;
import com.bymikiii.fullstack_v2.service.ProductService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    public final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok().body(productService.getAllProducts());
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Product> getMethodName(@PathVariable String slug) {
        try {
            Product foundProduct = this.productService.findByName(slug);
            return ResponseEntity.ok().body(foundProduct);
        } catch (ItemNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("")
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
        try {
            return this.productService.saveProduct(product);
        } catch (ItemExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(product);
        }
    }

    @PutMapping("{name}")
    public ResponseEntity<Product> updateProduct(@PathVariable String name, @RequestBody Product product) {
        return this.productService.updateProduct(name, product);
    }

    @DeleteMapping("/{slug}")
    public ResponseEntity<String> deleteProduct(@PathVariable String slug) {
        return this.productService.deleteProduct(slug);
    }
}
