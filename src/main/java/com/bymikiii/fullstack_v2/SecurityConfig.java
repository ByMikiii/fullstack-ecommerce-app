
/*
 * Author: ByMikiii
 * Created Date: Sunday December 29th 2024
 */

package com.bymikiii.fullstack_v2;

import java.beans.Customizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.bymikiii.fullstack_v2.service.CustomUserDetailsService;

@Configuration
public class SecurityConfig {

  @Autowired
  private CustomUserDetailsService customUserDetailsService;

  @Autowired
  private JwtFilter jwtFilter;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/", "/login", "/register", "/api/v1/users/login").permitAll()
            .anyRequest().authenticated())
        // .formLogin().disable()
        .httpBasic()
        .and()
        .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder(12);
  }

  // @Bean
  // public DaoAuthenticationProvider authenticationProvider() {
  // DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
  // provider.setUserDetailsService(customUserDetailsService);
  // provider.setPasswordEncoder(passwordEncoder());
  // return provider;
  // }

  @Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration conf) throws Exception {
    return conf.getAuthenticationManager();
  }

}
