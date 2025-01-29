package com.bymikiii.fullstack_v2.service;

import com.bymikiii.fullstack_v2.model.User;
import com.bymikiii.fullstack_v2.model.dto.UserDTO;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class UserDTOMapper implements Function<User, UserDTO> {
  @Override
  public UserDTO apply(User user) {
    return new UserDTO(
        user.getId(),
        user.getUsername(),
        user.getFirstName(),
        user.getLastName(),
        user.getEmail(),
        user.getPhoneNumber());
  }

}
