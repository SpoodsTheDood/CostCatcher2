import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServTestService } from '../servtest.service';

@Component({
  selector: 'app-comp-change-service',
  templateUrl: './comp-change-service.component.html',
  styleUrls: ['./comp-change-service.component.css']
})
export class CompChangeServiceComponent {

  
  constructor(private servTestService: ServTestService) { }
json:any
  onModification(serviceInfo: {service:String, price:Number, dueDate:Date}){
console.log(serviceInfo)

  }
  ngOnInit() {
    this.servTestService.getPosts()
      .subscribe(response => {
        this.json = response
      })
  }
  changeService(newURL:string, serviceInfo: Object) {
    this.servTestService.put(newURL, serviceInfo).subscribe((response:any) => {
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
    let stringDate =
    '{"service":"'+serviceName+'","price":'+costPerPay+',"dueDate":"'+jsonDue+'","billingPeriod":"'+billingPd+'"}'
    //{"service":"uhhhhhhhhrh","price":76,"dueDate":"2023-06-21","billingPeriod":"yrly"}
    console.log(stringDate)
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
    if (/^\d+$/.test(price)) return parseInt(price)
    else return -1
  }
  
 

  errorCheck(date:string, period:string, name:string, cost:number){
  var errorCode = -1
  
  
  
  return errorCode
  }
  pickServToChange(){
    var selection = <HTMLInputElement>document.getElementById("servicesToChange")
    var selectionString = selection.value
    console.log(selectionString)
    console.log(this.json)
    var stringJSON = JSON.stringify(this.json)
    var stringID = "ERROR"
    console.log("Beginning change")
    for (var i in this.json){
      console.log(JSON.stringify(this.json[i]))
      console.log(stringJSON) //logs stringJSON correctly
      if (this.json[i].service == (selectionString)){
        console.log(JSON.stringify(this.json[i]))
        console.log("Success")
        /////////////////////
        //Issues start here//
        ////////////////////
        console.log(stringID) 
        stringID = JSON.stringify(this.json[i]._id)
        console.log(stringID)   
      }
      //this is meant to be used to pick which _id to use
    }
    return(stringID)
    }
  changeBill(){
    var dueDate = this.convertDate(this.date)
    console.log(dueDate)
    var billingPd = this.getBillingPd()
    console.log(billingPd)
    var serviceName = this.getServName()
    console.log(serviceName)
    var costPerPay = this.getCost()
    console.log(costPerPay)
    var isValid = this.errorCheck(dueDate, billingPd, serviceName, costPerPay)
    var jsonObject = this.convertToJSON(dueDate, billingPd, serviceName, costPerPay)
    console.log(jsonObject)
    var newID = this.pickServToChange()
    console.log(newID)
    var newURL = `http://localhost:3000/services/` + JSON.parse(newID)
    console.log(newURL)
    this.changeService(newURL, jsonObject)
  }
  
  
}
