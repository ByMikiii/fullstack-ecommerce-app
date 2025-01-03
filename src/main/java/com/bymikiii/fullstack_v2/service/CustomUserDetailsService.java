/*
 * Author: ByMikiii
 * Created Date: Tuesday December 31st 2024
 */
package com.bymikiii.fullstack_v2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bymikiii.fullstack_v2.model.User;
import com.bymikiii.fullstack_v2.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {
  @Autowired
  private UserRepository userRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User foundUser = userRepository.findByUsername(username);

    if (foundUser == null) {
      throw new UsernameNotFoundException(username + " not found");
    }

    return org.springframework.security.core.userdetails.User
        .withUsername(foundUser.getUsername())
        .password(foundUser.getPassword())
        .roles("User")
        .build();
  }

}