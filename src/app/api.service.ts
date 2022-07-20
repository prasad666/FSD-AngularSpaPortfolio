import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = "http://localhost:8000/testimonials";

  constructor(private http:HttpClient) { }

  public getTestimonials(){
    return this.http.get(this.URL); 
  }
}