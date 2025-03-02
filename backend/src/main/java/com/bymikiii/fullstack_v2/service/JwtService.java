package com.bymikiii.fullstack_v2.service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import java.security.SecureRandom;
import java.util.Date;
import javax.crypto.SecretKey;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
    private final SecretKey secretKey = generateSecretKey();

    public SecretKey generateSecretKey() {
        byte[] secretKeyBytes = new byte[32];
        SecureRandom secureRandom = new SecureRandom();
        secureRandom.nextBytes(secretKeyBytes);
        return Keys.hmacShaKeyFor(secretKeyBytes);
    }

    public String generateToken(String username) {
        Date Issued = new Date();
        // 7 days
        Date Expiration = new Date(Issued.getTime() + 1000 * 60 * 60 * 24 * 7);
        return Jwts.builder()
                .subject(username)
                .issuedAt(Issued)
                .expiration(Expiration)
                .signWith(this.secretKey)
                .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser()
                    .verifyWith(this.secretKey)
                    .build()
                    .parseSignedClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            System.out.println("Invalid JWT");
            return false;
        }
    }

    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();

        return claims.getSubject();
    }

}
