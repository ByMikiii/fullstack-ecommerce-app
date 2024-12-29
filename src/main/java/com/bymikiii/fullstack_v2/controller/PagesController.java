/*
 * Author: ByMikiii
 * Created Date: Thursday December 19th 2024
 */

package com.bymikiii.fullstack_v2.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping
public class PagesController {

  @GetMapping("")
  public String home() {
    return "homee";
  }

  @GetMapping("/about")
  public String about() {
    return "aboutt";
  }

}