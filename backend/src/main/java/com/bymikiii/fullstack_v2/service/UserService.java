package com.bymikiii.fullstack_v2.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.bymikiii.fullstack_v2.model.dto.UserRegistrationDTO;
import com.bymikiii.fullstack_v2.service.UserRegistrationDTOMapper;
import com.bymikiii.fullstack_v2.exception.ItemExistsException;
import com.bymikiii.fullstack_v2.exception.ItemNotFoundException;
import com.bymikiii.fullstack_v2.model.*;
import com.bymikiii.fullstack_v2.repository.*;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final UserRegistrationDTOMapper userRegistrationDTOMapper;

    public UserService(UserRepository userRepository, AuthenticationManager authenticationManager,
            JwtService jwtService, PasswordEncoder passwordEncoder,
            UserRegistrationDTOMapper userRegistrationDTOMapper) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
        this.userRegistrationDTOMapper = userRegistrationDTOMapper;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public ResponseEntity<String> saveUser(User user) {
        User foundUser = this.userRepository.findByUsername(user.getUsername());
        if (foundUser != null) {
            throw new ItemExistsException("User " + user.getUsername() + " already exists");
        }
        String passwordText = user.getPassword();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        user.setPassword(passwordText);
        return verify(user);
    }

    public User findByUsername(String username) {
        User foundUser = userRepository.findByUsername(username);
        if (foundUser == null) {
            throw new ItemNotFoundException(username + " not found");
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
            foundUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
            foundUser.setFirstName(updatedUser.getFirstName());
            foundUser.setLastName(updatedUser.getLastName());

            this.userRepository.save(foundUser);
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

    public ResponseEntity<String> verify(User user) {
        try {
            Authentication authentication = authenticationManager
                    .authenticate(
                            new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
            if (authentication.isAuthenticated()) {
                return ResponseEntity.ok(jwtService.generateToken(user.getUsername()));
            }
            return ResponseEntity.status(401).body("Not Authenticated");
        } catch (Exception e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }
}
