import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [MoviesService, Movie]
})
export class ContainerComponent implements OnInit {
  movieList: Array<Movie> = [];
  constructor(
    private moviesService: MoviesService,
    private movie: Movie
  ) { }

  ngOnInit() {
    // cal for some fancy list of movies
    this.moviesService.searchMovieBy('', '50').subscribe(data => {
      this.movieList = data;
    });
  }

  searchText(movieName) {
    this.moviesService.searchMovieBy(movieName, '50').subscribe(data => {
      this.movieList = data;
    });
  }

}
