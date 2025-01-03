/*
 * Author: ByMikiii
 * Created Date: Tuesday December 31st 2024
 */
package com.bymikiii.fullstack_v2.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SessionController {

  @GetMapping("/session-id")
  public String getSessionId(HttpServletRequest request) {
    return request.getSession().getId();
  }
}
