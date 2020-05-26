import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
id;;

movie$: Observable<moviePage[]>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.id = params.get('movieId') );


const params = new HttpParams()
.set('api_key','305369f837dc51bc34b984b5287ba22e');

this.movie$ = this.http.get<moviePage[]>('https://api.themoviedb.org/3/movie/' + this.id,{params});


  }

}