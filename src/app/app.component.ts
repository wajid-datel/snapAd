import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from "./responsive.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private resService: ResponsiveService){

  }

  ngOnInit(){
    this.resService.adaptToScreenSize();


  }


}
