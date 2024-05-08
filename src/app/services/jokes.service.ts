import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  //services are made to call API in it or to save global data
  
  constructor(private http:HttpClient){
      
  }

  getjoke(){
     return this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
  }
}
