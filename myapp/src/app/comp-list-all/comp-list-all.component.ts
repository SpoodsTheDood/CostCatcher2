import { Component } from '@angular/core';
//to pass values back and forth
import { CompMakeServiceComponent } from '../comp-make-service/comp-make-service.component';

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

//These are the ones that will show up inside the lists
currNames= ["Netflix - Premium", "Disney+ - Ad Free"]
currDaysTillDue = [31, 25]
currPayDays = [31, 31]
currPrice = [19.99, 10.99]

//will probably be unused, user can input custom bills
presNames =  ["Netflix - Basic Ad Free", "Netflix - Basic w/ Ads", "Netflix - Standard",
              "Netflix - Premium", "Disney+ w/ Ads", "Disney+ - Ad Free"]
presDaysTillDue = ["MON", "MON", "MON", "MON", "MON", "MON"]
presPrice = [9.99, 6.99, 15.49,
              19.99, 7.99, 10.99] 

              //I have no idea what I made these for
              addItem(){

              }

              removeItem(){
                
              }

}
