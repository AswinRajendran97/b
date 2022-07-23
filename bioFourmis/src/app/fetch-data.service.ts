import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http : HttpClient) { }

  public getData() : Observable<any>{
    return this.http.get("/assets/db.json")
    .pipe(
      map(
      (data) => { console.log("data",data) 
    return data;
    }
      
    ));
  }

}
