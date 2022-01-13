package com.devsuperior.dsmovie.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Embeddable
public class ScorePk implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name = "movie_id")
	private Movie movie;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	public ScorePk() {}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
