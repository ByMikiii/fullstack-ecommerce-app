package com.bymikiii.fullstack_v2.exception;

public class UserExistsException extends RuntimeException {
  public UserExistsException(String message) {
    super(message);
  }
}