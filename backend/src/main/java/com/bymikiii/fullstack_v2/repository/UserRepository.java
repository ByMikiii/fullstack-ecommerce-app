package com.bymikiii.fullstack_v2.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.bymikiii.fullstack_v2.model.User;

public interface UserRepository extends MongoRepository<User, ObjectId> {
  User findByUsername(String username);
}