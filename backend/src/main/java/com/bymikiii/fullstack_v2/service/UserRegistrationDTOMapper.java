package com.bymikiii.fullstack_v2.service;

import com.bymikiii.fullstack_v2.model.User;
import com.bymikiii.fullstack_v2.model.dto.UserRegistrationDTO;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class UserRegistrationDTOMapper implements Function<User, UserRegistrationDTO> {
    @Override
    public UserRegistrationDTO apply(User user) {
        return new UserRegistrationDTO(
                user.getUsername(),
                user.getPassword());
    }
}
