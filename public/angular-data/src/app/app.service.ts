import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getRestaurants(data: any) {
   
    return this.http.get(`http://localhost:8085/restaurants/getRestaurants?${data}`, httpOptions)
  }

  getDish(data: any) {
    return this.http.get(`http://localhost:8085/restaurants/getDish?${data}`, httpOptions)
  }
}
