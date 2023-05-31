//alright im overwhelmed, i'm making comments
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServTestService } from '../servtest.service';

import { CompListAllComponent } from '../comp-list-all/comp-list-all.component';
// ^ most variables are saved in list-all for the sole reason of myconvenience
import {MatNativeDateModule} from '@angular/material/core'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';          

@Component({
  selector: 'app-comp-make-service',
  templateUrl: './comp-make-service.component.html',
  styleUrls: ['./comp-make-service.component.css']
})

export class CompMakeServiceComponent {

// the specific url for the user we are adding a service to... id is '646638e8c7b9a011beca82c1'
url = 'http://localhost:3000/services/646638e8c7b9a011beca82c1'
    /*constructor(private httpClient:HttpClient,
      serviceTest: ServTestService){}

      getHeapCodeStatistics(){
        return this.httpClient.get(this.url)
      }*/
constructor(private servTestService: ServTestService) {}

createService(serviceInfo: Object) {
  this.servTestService.post(this.url, serviceInfo).subscribe((response:any) => {
    console.log(response)

  })

}



date = ""

setMonthNum(month:String){
  if (month = 'Feb') {return 28}
  else if (month in ['Apr', 'Jun', 'Sep', 'Nov']) {return 30}
  else {return 31}
}

getMonthNum(monthName:string){
  var monthNum = "00"
  if (monthName == 'Jan') monthNum = "01"
  if (monthName == 'Feb') monthNum = "02"
  if (monthName == 'Mar') monthNum = "03"
  if (monthName == 'Apr') monthNum = "04"
  if (monthName == 'May') monthNum = "05"
  if (monthName == 'Jun') monthNum = "06"
  if (monthName == 'Jul') monthNum = "07"
  if (monthName == 'Aug') monthNum = "08"
  if (monthName == 'Sep') monthNum = "09"
  if (monthName == 'Oct') monthNum = "10"
  if (monthName == 'Nov') monthNum = "11"
  if (monthName == 'Dec') monthNum = "12"
  return(monthNum)
}

getDate(){
  var dateToString = String(this.date)
  dateToString = dateToString.substring(4)
  dateToString = dateToString.substring(0, 11)
  var dayMonYear = dateToString.split(" ")
  dayMonYear[0] = this.getMonthNum(dayMonYear[0])

  var jsonApplicableString = (dayMonYear[2]+"-"+dayMonYear[0]+"-"+dayMonYear[1])
  return(jsonApplicableString)
}

getBillingPd(){
  var userInput = <HTMLInputElement>document.getElementById("billingPd")
  return userInput.value
}

getServName(){
  var serviceName = document.getElementById("Usr")
}

makeNewBill(){
  var dueDate = this.getDate()
  var billingPd = this.getBillingPd()
}


    }
  