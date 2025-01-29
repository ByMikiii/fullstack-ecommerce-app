/*
 * Author: ByMikiii
 * Created Date: Thursday December 19th 2024
 */

package com.bymikiii.fullstack_v2.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping
public class PagesController {

  @GetMapping("/")
  public String homePage() {
    return "index";
  }

  @GetMapping("/about")
  public String aboutPage() {
    return "aboutt";
  }

}