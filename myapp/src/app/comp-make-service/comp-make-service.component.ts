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
//these bad boys are for when you make a new service
//will not be used outside of this component

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



newDue = "-1"
newName = "Default"
newPrice = "-1.11"
newPayDay = "-1"


//I can't remember why i made these but it breaks if i remove them
finalDue = -2
finalPrice = -2.22
finalPayDay?:number = -2 as number



setMonthNum(month:String){
  if (month = 'Feb') {return 28}
  else if (month in ['Apr', 'Jun', 'Sep', 'Nov']) {return 30}
  else {return 31}
}



    }
  