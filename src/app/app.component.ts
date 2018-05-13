import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService]
})
export class AppComponent implements OnInit {
  title = 'app';
  movieCount = 0;

  constructor(
    private moviesService: MoviesService
    ) { }

  ngOnInit() {
    this.moviesService.getMoviesCount(movieNumber => {
      this.movieCount = movieNumber;
    });
  }
}
