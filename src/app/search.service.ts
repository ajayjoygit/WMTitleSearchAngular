import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable, of, empty } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public baseUrl = "https://localhost:44310/api/Titles/search/";
  public searchResults: any;

  constructor(private httpClient: HttpClient) { }


  //makes the HTTP request to get the resources and returns the response as observable;  
  public searchEntries(term): Observable<any>{
    if (term === "" ){
      console.log("Not defined");
      return of(null);
      //return empty();
    }else{
      let params = term
      console.log(this.baseUrl, {params});
      return this.httpClient.get(this.baseUrl+params).pipe(
        map(response => {
          console.log(response)
          return this.searchResults = response;
        })
      );
    }
    
  }

  //returns the response for the first method
  public _searchEntries(term){
    return this.searchEntries(term);
  }
}
