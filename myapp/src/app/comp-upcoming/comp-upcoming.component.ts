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

getNextYear(){

}

getNextMonth(){

}

getFutureDate(date:string = moment().format("MMMM D"), billingPd:String = "Def"){
  var daysUntilNext = 0
/*
  <option value="mnthDate">The Same Day Every Month</option>
  <option value="mnthSet">Every Exactly 30 Days</option>
  <option value="wkly">Weekly - Every 7 Days</option>
  <option value="yrlySet">Every 365 Days</option>
  <option value="yrlyDate">The Same Day Every Year</option>
  <option value="biwk">Every 14 Days</option>
*/
switch (billingPd){
case ("mnthDate"):
  this.getNextMonth()
  break
case ("mnthSet"):
  daysUntilNext = 30
  break
case ("wkly"):
  daysUntilNext = 7
  break
case("yrlySet"):
  this.getNextYear
  break

}
}

compareDates(newDate:String, oldDates:any){

  var oldString:string = JSON.stringify(oldDates)
  console.log(oldString)
}

updateDate(){
  var today = this.getToday()
  return today
}

 ngOnInit(){
    this.getServices()
    var today = this.updateDate()
    this.compareDates(today, this.json)
  }


}
