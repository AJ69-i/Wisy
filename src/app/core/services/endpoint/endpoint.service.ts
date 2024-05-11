import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private HttpClient:HttpClient) { }

  getData(district: string):Observable<any> {
    return this.HttpClient.get<any>(district + "/31,80/forecast");
  }
}
