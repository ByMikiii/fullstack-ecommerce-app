/*
 * Author: ByMikiii
 * Created Date: Thursday December 19th 2024
 */

package com.bymikiii.fullstack_v2.exception;

public class UserNotFoundException extends RuntimeException {
  public UserNotFoundException(String message) {
    super(message);
  }
}