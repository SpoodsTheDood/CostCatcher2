import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-list-all',
  templateUrl: './comp-list-all.component.html',
  styleUrls: ['./comp-list-all.component.css']
})
export class CompListAllComponent {

newDue = -1
newName = "Default"
newPrice = -1.11
newMonthly = false
newPayDay = -1

currNames= ["Netflix - Premium", "Disney+ - Ad Free"]
currDaysTillDue = [31, 25]
currPayDays = [31, 31]
currPrice = [19.99, 10.99]


presNames =  ["Netflix - Basic Ad Free", "Netflix - Basic w/ Ads", "Netflix - Standard",
              "Netflix - Premium", "Disney+ w/ Ads", "Disney+ - Ad Free"]
presDaysTillDue = ["MON", "MON", "MON", "MON", "MON", "MON"]
presPrice = [9.99, 6.99, 15.49,
              19.99, 7.99, 10.99] 

              addItem(){

              }

              removeItem(){
                
              }

}
