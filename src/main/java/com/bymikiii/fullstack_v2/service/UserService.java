/*
* Author: ByMikiii
* Created Date: Thursday December 19th 2024
*/
package com.bymikiii.fullstack_v2.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bymikiii.fullstack_v2.exception.UserExistsException;
import com.bymikiii.fullstack_v2.exception.UserNotFoundException;
import com.bymikiii.fullstack_v2.model.*;
import com.bymikiii.fullstack_v2.repository.*;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  public void saveUser(User user) {
    User foundUser = this.userRepository.findByUsername(user.getUsername());
    if (foundUser != null) {
      throw new UserExistsException("User " + user.getUsername() + " already exists");
    }
    userRepository.save(user);
  }

  public User findByUsername(String username) {
    User foundUser = userRepository.findByUsername(username);
    if (foundUser == null) {
      throw new UserNotFoundException(username + " not found");
    }
    return foundUser;
  }

  public ResponseEntity<String> updateUser(String username, User updatedUser) {
    User foundUser = findByUsername(username);
    if (foundUser == null) {
      return ResponseEntity.status(404).body("User does not exist");
    } else {
      foundUser.setUsername(updatedUser.getUsername());
      foundUser.setEmail(updatedUser.getEmail());
      foundUser.setPassword(updatedUser.getPassword());
      foundUser.setFirstName(updatedUser.getFirstName());
      foundUser.setLastName(updatedUser.getLastName());

      saveUser(foundUser);
      return ResponseEntity.ok("User changed");
    }
  }

  public ResponseEntity<String> deleteUser(String username) {
    User foundUser = findByUsername(username);
    if (foundUser == null) {
      return ResponseEntity.status(404).body("User does not exist");
    } else {
      userRepository.delete(foundUser);
      return ResponseEntity.ok("User deleted");
    }
  }
}