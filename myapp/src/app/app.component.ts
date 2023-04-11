import { Component } from '@angular/core';


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
  title = 'test';
  addItem(){
    var allPrices = document.getElementById("priceList")
    var allLocations = document.getElementById("locList")
    var allDates = document.getElementById("billList")

  }

}
