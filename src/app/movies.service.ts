import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

export interface moviePage {
  "adult": boolean;
  "backdrop_path": string;
  "belongs_to_collection": Array<any>;
  "budget": number;
  "genres": Array<any>;
  "homepage": string;
  "id": number;
  "imdb_id": string;
  "original_language": string;
  "original_title": string;
  "overview": string;
  "popularity": number;
  "poster_path": string;
  "production_companies": Array<any>;
  "production_countries": Array<any>;
  "release_date": string;
  "revenue": number;
  "runtime": number;
  "spoken_languages": Array<any>;
  "status": string;
  "tagline": string;
  "title": string;
  "video": boolean;
  "vote_average": number;
  "vote_count": number;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(private http: HttpClient,) { 
    
  }

getMovie(movieId: string): Observable<moviePage[]> {
const params = new HttpParams()
.set('api_key','305369f837dc51bc34b984b5287ba22e');

return this.http.get<moviePage[]>('https://api.themoviedb.org/3/movie/' + movieId,{params});
}

}