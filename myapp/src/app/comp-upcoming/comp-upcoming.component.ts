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

getServices(){
  this.servTestService.getPosts()
  .subscribe(response => {
    this.json = response
  })
  
}

getToday(){
  var today = moment()
  var todayFormatted = today.format("MMMM D")
  return(todayFormatted)
}

getDaysInMonth(month:string, year:string){
  var dayCt = -1
if (month in ["April", "June", "September", "November"]) dayCt = 30
else if(month = "February"){
  //leap year moment
  if (Number(year) % 4 == 0){
    if (Number(year) % 100 == 0){
      if(Number(year) % 400 == 0) dayCt = 29 
        else dayCt = 28
    } else dayCt = 29
  } else dayCt = 28
} else dayCt = 31
console.log(dayCt)
return dayCt
}

getNextYear(year:string){
  return String(Number(year) + 1)
}

getNextMonth(month:string){
  if (month == "12") month = "1"
  else month = String((Number(month)+1)) 
  return(month)
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

getFutureDate(date:string = moment().format("MMMM D YYYY"), billingPd:String = "Def"){
  var daysUntilNext = 0
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
  newDate = moment().add('1', 'M')
  break
case ("mnthSet"):
  newDate = moment().add('30', 'd')
  break
case ("wkly"):
  newDate = moment().add('7', 'd')
  break
case("yrlySet"):
  newDate = moment().add('1', 'y')
  break
case("yrlyDate"):
case("biwk"):
  newDate = moment().add('14', 'd')
  break
}
return(newDate)
}

compareDates(newDate:String, oldDates:any){

  var oldString:string = JSON.stringify(oldDates)
  console.log(oldString)
}

formatDates(oldDate: string){
var oldDateArray = oldDate.split(" ")
console.log(oldDate)
}

updateDate(){
  var today = this.getToday()
  return today
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
  for (var i in this.json){
    this.formatDates(JSON.stringify(this.json[i].dueDate))
  }
}


 ngOnInit(){
    this.getServices()
    console.log(this.json)
    this.searchDates()
  }


}
