package com.bymikiii.fullstack_v2.model.dto;

import org.bson.types.ObjectId;

public record UserDTO (ObjectId id, String username, String firstName, String lastName, String email, String phoneNumber)
{

}
