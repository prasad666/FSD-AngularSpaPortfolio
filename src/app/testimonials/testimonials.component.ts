import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  clientTestimonials:any=null;
  
  constructor(private api:ApiService) { }

  public ngOnInit() {
    this.api.getTestimonials().subscribe((data)=>{this.clientTestimonials = data;});
  }
}


