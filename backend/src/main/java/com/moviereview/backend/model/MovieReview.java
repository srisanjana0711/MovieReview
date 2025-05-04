//package com.moviereview.backend.model;
//
//public class MovieReview {
//
//}
package com.moviereview.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "movie_reviews")
public class MovieReview {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String movieName;
    private String review;

    public MovieReview() {}

    public MovieReview(String movieName, String review) {
        this.movieName = movieName;
        this.review = review;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }
}
