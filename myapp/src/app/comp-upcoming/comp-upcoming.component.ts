import { Component, Input } from '@angular/core';
import { ServTestService } from '../servtest.service';
import * as moment from 'moment';

@Component({
  selector: 'app-comp-upcoming',
  templateUrl: './comp-upcoming.component.html',
  styleUrls: ['./comp-upcoming.component.css']
})
export class CompUpcomingComponent {
//this will be the card that appear for the bills with the closest due dates

json: any
  
constructor(private servTestService: ServTestService) {}

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

getFutureDate(date:string = String(moment().format("MMMM D YYYY")), billingPd:String = "Def"){
  var daysUntilNext = 0
  date = this.formatDates(date)
/*
  <option value="mnthDate">The Same Day Every Month</option>
  <option value="mnthSet">Every Exactly 30 Days</option>
  <option value="wkly">Weekly - Every 7 Days</option>
  <option value="yrlySet">Every 365 Days</option>
  <option value="yrlyDate">The Same Day Every Year</option>
  <option value="biwk">Every 14 Days</option>
*/
var newDate:any
switch (billingPd){
case ("mnthDate"):
  newDate = String(moment().add('1', 'M'))
  break
case ("mnthSet"):
  newDate = String(moment().add('30', 'd'))
  break
case ("wkly"):
  newDate = String(moment().add('7', 'd'))
  break
case("yrlySet"):
  newDate = String(moment().add('1', 'y'))
  break
case("yrlyDate"):
  newDate = String(moment().add('365', 'd'))
  break
case("biwk"):
  newDate = String(moment().add('14', 'd'))
  break
  default:
    newDate = String(moment().add('30', 'd'))
}
console.log(newDate)
newDate = this.formatMoment(newDate)
return(newDate)
}


changeService(newURL:string, serviceInfo: Object) {
  this.servTestService.put(newURL, serviceInfo).subscribe((response:any) => {
    console.log(serviceInfo)
    console.log(response)
    location.reload()
  })
}

formatMoment(oldDate:string){
  var oldDateArray = oldDate.split(" ")
  oldDateArray[1] = this.getMonthNum(oldDateArray[1])
  return(oldDateArray[3]+"-"+oldDateArray[1]+"-"+oldDateArray[2])
}

formatDates(oldDate: string){
var oldDateArray = oldDate.split("-")
oldDateArray[2] = oldDateArray[2].slice(0, (oldDateArray[2].indexOf("T")))
oldDateArray[0] = oldDateArray[0].substring(1)
var formattedDate = oldDateArray[0] + "-" + oldDateArray[1] + "-" + oldDateArray[2]
console.log(formattedDate)
return formattedDate
}

convertToJSON(dueDate:String, billingPd:String, serviceName:String, costPerPay:number){
  const jsonDue = String(dueDate)
  let stringDate =
  '{"service":"'+serviceName+'","price":'+costPerPay+',"dueDate":"'+jsonDue+'","billingPeriod":'+billingPd+'}'
  //{"service":"uhhhhhhhhrh","price":76,"dueDate":"2023-06-21","billingPeriod":"yrly"}
  console.log(stringDate)
  return JSON.parse(stringDate)
}

searchDates(){
  console.log("Searching...")
 /* for (var i in this.json){
    console.log(JSON.stringify(this.json[i]))
    if (this.json[i].service == (selectionString)){
      console.log(JSON.stringify(this.json[i]))
      console.log("Success")
      console.log(stringID) 
      stringID = JSON.stringify(this.json[i]._id)
      console.log(stringID)   
    }
  }
  */
  console.log(this.json)
  var dummy = moment().format("YYYY-MM-DD")
  console.log(dummy)
  for (var i in this.json){
    if (dummy == this.formatDates(JSON.stringify(this.json[i].dueDate))){
      var oldDate = JSON.stringify(this.json[i].dueDate)
      console.log(oldDate)
      console.log(dummy)
      var idOfChanger = JSON.stringify(this.json[i]._id)
      var servName = this.json[i].service
      var newDue = this.getFutureDate(JSON.stringify(this.json[i].dueDate), JSON.stringify(this.json[i].billingPd))
      console.log(newDue)
      var costPerPay = JSON.stringify(this.json[i].price)
      var billing = JSON.stringify(this.json[i].billingPeriod)
      console.log(idOfChanger + servName + newDue + costPerPay + billing)
      var jsonValue = this.convertToJSON(newDue, billing, servName, Number(costPerPay))
      console.log(jsonValue)
      var newURL = `http://localhost:3000/services/` + JSON.parse(idOfChanger)
      this.changeService(newURL, jsonValue)
      console.log(newURL)
      }
  }
}

 ngOnInit(){
  this.servTestService.getPosts()
  .subscribe(response => {
    this.json = response
    console.log(this.json)//logs correctly at bottom
    this.searchDates()
  })
  }


}
