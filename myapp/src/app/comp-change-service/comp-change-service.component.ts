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
  date = ""
  url = 'http://localhost:3000/services/646638e8c7b9a011beca82c1'
  createService(serviceInfo: Object) {
    this.servTestService.put(this.url, serviceInfo).subscribe((response:any) => {
      console.log(serviceInfo)
      console.log(response)
    })
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
  
  makeNewBill(){
    var dueDate = this.convertDate(this.date)
    var billingPd = this.getBillingPd()
    var serviceName = this.getServName()
    var costPerPay = this.getCost()
    var isValid = this.errorCheck(dueDate, billingPd, serviceName, costPerPay)
    var jsonObject = this.convertToJSON(dueDate, billingPd, serviceName, costPerPay)
    this.createService(jsonObject)
  }
}
