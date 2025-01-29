package com.bymikiii.fullstack_v2.controller;

import java.util.List;

import com.bymikiii.fullstack_v2.model.dto.UserDTO;
import com.bymikiii.fullstack_v2.model.dto.UserRegistrationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bymikiii.fullstack_v2.exception.UserExistsException;
import com.bymikiii.fullstack_v2.exception.UserNotFoundException;
import com.bymikiii.fullstack_v2.model.*;
import com.bymikiii.fullstack_v2.service.*;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
  private final UserService userService;
  private final UserDTOMapper userDTOMapper;

  public UserController(UserService userService, UserDTOMapper userDTOMapper) {
    this.userService = userService;
    this.userDTOMapper = userDTOMapper;
  }

  @GetMapping("")
  public List<User> getAllUsers() {
    return this.userService.getAllUsers();
  }

  @GetMapping("/{username}")
  public ResponseEntity<?> getUser(@PathVariable String username) {
    try {
      User foundUser = this.userService.findByUsername(username);
      return ResponseEntity.ok(userDTOMapper.apply(foundUser));
    } catch (UserNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }
  }

  @PostMapping("")
  public ResponseEntity<String> saveUser(@RequestBody User user) {
    try {
      System.out.println(user.getUsername());
      return this.userService.saveUser(user);
    } catch (UserExistsException e) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
    }
  }

  @PutMapping("/{username}")
  public ResponseEntity<String> putMethodName(@PathVariable String username, @RequestBody User user) {
    return userService.updateUser(username, user);
  }

  @DeleteMapping("/{username}")
  public ResponseEntity<String> deleteUser(@PathVariable String username) {
    return userService.deleteUser(username);
  }

  @PostMapping("/login")
  public ResponseEntity<String> login(@RequestBody User user) {
    return userService.verify(user);
    // return "Success";
  }

  @PostMapping("/register")
  public User register(@RequestBody User user) {
    return user;
  }
}
