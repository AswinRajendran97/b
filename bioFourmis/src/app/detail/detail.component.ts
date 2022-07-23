import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  dataFromJson : any;
  moviesSelected : any;
  constructor(public fetchService : FetchDataService , private router : ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.dataFromJson = await this.getMovieData();
     this.filterData();
  }
  getMovieData() : Promise<any>{
    return lastValueFrom(this.fetchService.getData()); 
  //  .subscribe(
  //   (movie) => { console.log("movie",movie , typeof(movie.movies));
  //     this.dataFromJson=movie },
  //   // (err) => { console.log(err)}
  //  );
 
  }
  filterData(){
 console.log("this.dataFromJson",this.dataFromJson);
   console.log("this.router.params",this.router.params);
   var mid: any;
   this.router.params.subscribe((par) => {console.log("id",par['id']);
    mid=par['id']});
   console.log("mid",mid);
   this.moviesSelected=this.dataFromJson.movies.filter(
    (data: any) => {return data.id==mid}
   );
   console.log("this.moviesSelected",this.moviesSelected);

  }
   
}
