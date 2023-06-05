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
import { error } from 'console';

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
    console.log(serviceInfo)
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

convertToJSON(dueDate:String, billingPd:String, serviceName:String, costPerPay:number){
  const jsonDue = String(dueDate)
  console.log(costPerPay)
  let stringDate =
  '{"service":"'+serviceName+'","price":'+costPerPay+',"dueDate":"'+jsonDue+'","billingPeriod":"'+billingPd+'"}'
  //{"service":"uhhhhhhhhrh","price":76,"dueDate":"2023-06-21","billingPeriod":"yrly"}
  return JSON.parse(stringDate)
}

convertDate(oldDate:any){
  var dateToString = String(oldDate)
  dateToString = dateToString.substring(4)
  dateToString = dateToString.substring(0, 11)
  var dayMonYear = dateToString.split(" ")
  dayMonYear[0] = this.getMonthNum(dayMonYear[0])
  var jsonApplicableString = (dayMonYear[2]+"-"+dayMonYear[0]+"-"+dayMonYear[1])
  return(jsonApplicableString)
}

getCurrDate(){
  var todayLong = Date()
  var finalDate = 1
  return finalDate
}

getBillingPd(){
  var userInput = <HTMLInputElement>document.getElementById("billingPd")
  return String(userInput.value)
}

getServName(){
  var serviceInput = <HTMLInputElement>document.getElementById("usrInpName")
  var serviceName = String(serviceInput.value)
  return serviceName
}

getCost(){
  var price = (<HTMLInputElement>document.getElementById("usrInpCost")).value
  if (!isNaN(Number(price))) return Number(price)
  else return -1
}

errorCheck(date:string, period:string, name:string, cost:number){
var errorCode = -1



return errorCode
}

makeNewBill(){
  var dueDate = this.convertDate(this.date)
  var billingPd = this.getBillingPd()
  var serviceName = this.getServName()
  var costPerPay = this.getCost()
  console.log(costPerPay)
  var isValid = this.errorCheck(dueDate, billingPd, serviceName, costPerPay)
  var jsonObject = this.convertToJSON(dueDate, billingPd, serviceName, costPerPay)
  this.createService(jsonObject)
  //location.reload()
}


    }
  