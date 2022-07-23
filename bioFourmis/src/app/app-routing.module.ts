import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path : "", component : MoviesComponent },
  { path : "movie/:id", component : DetailComponent },
  { path : "" , redirectTo : "" , pathMatch : "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
