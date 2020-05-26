import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { StaticPageComponent } from '../static-page/static-page.component';
import { MoviePageComponent } from '../movie-page/movie-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page/:slug', component: StaticPageComponent },
  { path: 'movie/:movieId', component: MoviePageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }