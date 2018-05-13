import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MoviesService {
  private subject = new Subject<any>();

  data: any;
  err: any;
  domain: String = (window.location.origin.search('http://localhost') !== -1)
  ? 'http://localhost:3000' :  'http://rotten-crap.herokuapp.com';

  constructor(private http: HttpClient,
    @Inject(DOCUMENT) private document: any) { }

  getMoviesCount(callback) {
    return this.http.get(this.domain + '/api/movie/count').subscribe(data => {
      console.log('here you should get the moviecount:', data);
      callback(data);
    });
  }

  searchMovieBy(name: string, limit: string): Observable<any> {
    return this.http.get(this.domain + '/api/movie/search', {
      params: {
        name: name,
        limit: limit
      }
    }).map(data => data);
  }
}
