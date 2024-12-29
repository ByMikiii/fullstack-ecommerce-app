/*
 * Author: ByMikiii
 * Created Date: Thursday December 19th 2024
 */
package com.bymikiii.fullstack_v2.exception;

public class UserExistsException extends RuntimeException {
  public UserExistsException(String message) {
    super(message);
  }
}