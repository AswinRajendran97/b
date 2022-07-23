import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import {   MatCard } from '@angular/material/card';
import {  MatButton  } from '@angular/material/button';
import { FetchDataService } from '../fetch-data.service';
import { Router,Route } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  filterMovies : any;
  movieList = [];
  moviesFullList :any;
  dataFromJson : any;
  movieName :any ;
  year :any ;
  genres :any ;
  showFilter =false;
  constructor(public fb : FormBuilder,
    public fetchService : FetchDataService ,
    private router : Router) {
   }

   ngOnInit() {
    this.filterMovies=this.fb.group({
      movieName : [""] ,
      year : [""] ,
      genres : [""] ,
    });
   this.getMovieData();
  }
  getMovieData(){
    this.fetchService.getData()
   .subscribe(
    (movie) => { console.log(movie);
      this.dataFromJson=movie },
    // (err) => { console.log(err)}
   );
  //  console.log("this.dataFromJson",this.dataFromJson);
  //  this.moviesFullList=this.dataFromJson;
  }
  navigateToMovieDtls(mid: any){
    this.router.navigate(["/movie",mid]);
  }
  openFilter(){
    this.showFilter=!this.showFilter;
  }
 
}
