//package com.moviereview.backend.controller;
//
//public class MovieReviewController {
//
//}
package com.moviereview.backend.controller;

import com.moviereview.backend.model.MovieReview;
import com.moviereview.backend.repository.MovieReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:3000") // React frontend
public class MovieReviewController {

    @Autowired
    private MovieReviewRepository movieReviewRepository;

    @GetMapping
    public List<MovieReview> getAllReviews() {
        return movieReviewRepository.findAll();
    }

    @PostMapping
    public MovieReview addReview(@RequestBody MovieReview review) {
        return movieReviewRepository.save(review);
    }

    @PutMapping("/{id}")
    public MovieReview updateReview(@PathVariable Long id, @RequestBody MovieReview updatedReview) {
        MovieReview review = movieReviewRepository.findById(id).orElseThrow();
        review.setMovieName(updatedReview.getMovieName());
        review.setReview(updatedReview.getReview());
        return movieReviewRepository.save(review);
    }

    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable Long id) {
        movieReviewRepository.deleteById(id);
    }
}

