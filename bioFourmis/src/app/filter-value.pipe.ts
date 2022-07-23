import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterValue'
})
export class FilterValuePipe implements PipeTransform {

  transform(value: any, args1: any ,args2: any ,args3: any , ): any {
    var filteredData: any[]=[];
    var filteredData1: any[]=[];
    var filteredData2: any[]=[];
    var filteredData3: any[]=[];
    console.log("args1",args1); 
   
if( args1 ){
  console.log("args1",args1); 
  filteredData1=value.filter(
  (movies: any) => {   console.log("movies.title",movies.title );
    return movies.title.toLowerCase()==args1.toLowerCase()}
 );
 console.log("filteredData",filteredData1);
}
if (args2){
  console.log("args2",args2); 
  filteredData2=value.filter(
  (movies: any) => {   console.log("movies.year",movies.year );
    return movies.year==args2}
 );
 console.log("filteredData",filteredData2);
}
if (args3){
  console.log("args3",args3); 
  filteredData3=value.filter(
  (movies: any) => {   console.log("movies.genres",movies.genres);
    return movies.genres.includes(args3)}
 );
 console.log("filteredData",filteredData3);
}
    if (!args1 && !args2 && !args3) {
      console.log("args4");
      filteredData=value;
      return filteredData
    }
    filteredData=filteredData1.concat(filteredData2).concat(filteredData3);
      console.log("best",filteredData1);
    return filteredData;
  }

}
