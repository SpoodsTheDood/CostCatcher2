import { Component } from '@angular/core';
import { CompListAllComponent } from '../comp-list-all/comp-list-all.component';
import * as dayjs from 'dayjs';


@Component({
  selector: 'app-comp-make-service',
  templateUrl: './comp-make-service.component.html',
  styleUrls: ['./comp-make-service.component.css']
})
export class CompMakeServiceComponent {
  newDue = "-1"
newName = "Default"
newPrice = "-1.11"
newPayDay = "-1"
finalDue = -2
finalPrice = -2.22
finalPayDay = -2

getDayJSUntil(dayJsSelection:number){
  
}

makeNewBill(inputDue:number, inputName:string, inputPrice:number, inputPayDay:number) {
  this.newDue=(<HTMLInputElement>document.getElementById("usrInpDue")).value
  this.newName=(<HTMLInputElement>document.getElementById("usrInpName")).value
  this.newPrice=(<HTMLInputElement>document.getElementById("usrInpCost")).value
  this.newPayDay=(<HTMLInputElement>document.getElementById("billingPd")).value

  //Dear god dont look at this part for any reason
  //If you want to look at this, consider calling your therapist afterwards
  if(isNaN(Number(this.newDue)) || Number(this.newDue)  % 1 != 0 || Number(this.newDue) < 1){
      alert("ERROR! Your due date is invalid. Please use a whole number greater than or equal to 1")}
    else if (isNaN(Number(this.newPrice)) || Number(this.newPrice) < 1){
      alert("ERROR! Your cost is invalid. Please use a number greater than or equal to 1")
    }
    else{
      switch(this.newPayDay){
        case "biwk":
          this.finalPayDay = 14
          break
        case "mnthDay":
          
          break
        case "mnthSet":
          this.finalPayDay = 30
          break
        case "yrlySet":
          this.finalPayDay = 365
          break
        default:
          alert("ERROR! The selected pay period is either invalid or coming soon! Please try a different period")
      }
    }
  }
}


