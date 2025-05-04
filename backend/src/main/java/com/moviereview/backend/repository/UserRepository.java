//package com.moviereview.backend.repository;
//
//public interface UserRepository {
//
//}
package com.moviereview.backend.repository;

import com.moviereview.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
