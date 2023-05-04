//alright im overwhelmed, i'm making comments
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompListAllComponent } from '../comp-list-all/comp-list-all.component';
// ^ most variables are saved in list-all for the sole reason of myconvenience

@Component({
  selector: 'app-comp-make-service',
  templateUrl: './comp-make-service.component.html',
  styleUrls: ['./comp-make-service.component.css']
})

export class CompMakeServiceComponent {
//these bad boys are for when you make a new service
//will not be used outside of this component

url = 'http://localhost:3000/services/64494896c7234c797a7e1fa3'
    constructor(private httpClient:HttpClient){}

      getHeapCodeStatistics(){
        return this.httpClient.get(this.url)
      }
newDue = "-1"
newName = "Default"
newPrice = "-1.11"
newPayDay = "-1"

//I can't remember why i made these but it breaks if i remove them
finalDue = -2
finalPrice = -2.22
finalPayDay?:number = -2 as number

//any error will return false and make it not go through
//did this so i dont have 731 nested if statements
validResults = true

/*constructor(//come back to this
  private conListAll: CompListAllComponent
){}

midnight = require('node-schedule') 
changeDay = this.midnight.scheduleJob ('0 0 0 0 0', () => {
  for (let i = 0; i < this.conListAll.currDaysTillDue.length; i++){
    if (i = 1){

    }
  }
})*/

pickDate(oldDay:String){
  var newday = 0
      //changes the pay period based on what the user decided
      switch(oldDay){
        case "biwk":
          newday = 14
          break
        case "mnthSet":
          newday = 30
          break
        case "yrlySet":
          newday = 365
          break
          default:
            newday = 0
            break
}
return(newday)
}
makeNewBill() {
  //Gets the info submitted by user
  this.newDue=(<HTMLInputElement>document.getElementById("usrInpDue")).value
  this.newName=(<HTMLInputElement>document.getElementById("usrInpName")).value
  this.newPrice=(<HTMLInputElement>document.getElementById("usrInpCost")).value
  this.newPayDay=(<HTMLInputElement>document.getElementById("billingPd")).value

  //Dear god dont look at this part yet
  if(isNaN(Number(this.newDue)) || Number(this.newDue)  % 1 != 0 || Number(this.newDue) < 1){
      alert("ERROR! Your due date is invalid. Please use a whole number greater than or equal to 1")
      this.validResults = false}
    else if (isNaN(Number(this.newPrice)) || Number(this.newPrice) < 1){
      alert("ERROR! Your cost is invalid. Please use a number greater than or equal to 1")
      this.validResults = false
    }
    else{
      this.validResults = true
      this.finalPayDay =this.pickDate(this.newPayDay)
      console.log('Date Successful')
      console.log(this.finalPayDay)
    }

    
    if(this.validResults = true){
      this.httpClient.post(this.url, JSON.stringify({
        "service": `${this.newName}`,
        "price": `${this.newPrice}`}))
      console.log('Upload success')
        

        }

      }
    }
  



