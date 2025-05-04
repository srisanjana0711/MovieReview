//package com.moviereview.backend.controller;
//
//public class AuthController {
//
//}
package com.moviereview.backend.controller;

import com.moviereview.backend.model.User;
import com.moviereview.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // React frontend URL
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return "Username already exists";
        }
        userRepository.save(user);
        return "Registered successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User existing = userRepository.findByUsername(user.getUsername());
        if (existing != null && existing.getPassword().equals(user.getPassword())) {
            return "Login successful";
        }
        return "Invalid credentials";
    }
}
