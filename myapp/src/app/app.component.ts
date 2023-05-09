import { Component, OnInit } from '@angular/core';
import { ServTestService } from './servtest.service';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  json: any
  title = 'test';
  addItem(){
    var allPrices = document.getElementById("priceList")
    var allLocations = document.getElementById("locList")
    var allDates = document.getElementById("billList")

  }
 constructor(private servtest: ServTestService){}
    ngOnInit(){
      this.servtest.getPosts()
      .subscribe(response => {
        this.json = response
      })
    }
}
