import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(private httpClient:HttpClient) { }


  GetLatestCovidData():Observable<any>{
    return this.httpClient.get('https://api.covid19api.com/live/country/global');
  }

  GetSearchData(country:string):Observable<any>{

    return this.httpClient.get('https://api.covid19api.com/live/country/'+country);
  
  }

}
