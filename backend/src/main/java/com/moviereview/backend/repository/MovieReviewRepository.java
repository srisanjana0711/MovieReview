//package com.moviereview.backend.repository;
//
//public interface MovieReviewRepository {
//
//}
package com.moviereview.backend.repository;

import com.moviereview.backend.model.MovieReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieReviewRepository extends JpaRepository<MovieReview, Long> {
}
