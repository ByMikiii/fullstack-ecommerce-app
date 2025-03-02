package com.bymikiii.fullstack_v2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.bymikiii.fullstack_v2")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
