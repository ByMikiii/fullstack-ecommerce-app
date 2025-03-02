package com.bymikiii.fullstack_v2.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bymikiii.fullstack_v2.exception.ItemExistsException;
import com.bymikiii.fullstack_v2.model.Product;
import com.bymikiii.fullstack_v2.repository.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public ResponseEntity<Product> saveProduct(Product product) {
        Product foundProduct = this.productRepository.findByName(product.getName());
        if (foundProduct != null) {
            throw new ItemExistsException("Product " + product.getName() + " already exists");
        }
        productRepository.save(product);
        return ResponseEntity
                .status(201)
                .body(product);
    }

    public Product findByName(String slug) {
        Product foundProduct = this.productRepository.findBySlug(slug);
        if (foundProduct == null) {
            throw new ItemExistsException(slug + " does not exist!");
        }
        return foundProduct;
    }

    public ResponseEntity<Product> updateProduct(String name, Product updatedProduct) {
        Product foundProduct = this.productRepository.findByName(name);
        if (foundProduct == null) {
            return ResponseEntity.status(404).body(updatedProduct);
        } else {
            foundProduct.setName(updatedProduct.getName());
            foundProduct.setBrand(updatedProduct.getBrand());
            foundProduct.setCategory(updatedProduct.getCategory());
            foundProduct.setDescriptio(updatedProduct.getDescriptio());
            return ResponseEntity.ok().body(foundProduct);
        }
    }

    public ResponseEntity<String> deleteProduct(String slug) {
        Product foundProduct = this.productRepository.findBySlug(slug);
        if (foundProduct == null) {
            return ResponseEntity.status(404).body(slug);
        } else {
            this.productRepository.delete(foundProduct);
            return ResponseEntity.ok().body(slug);
        }
    }
}
