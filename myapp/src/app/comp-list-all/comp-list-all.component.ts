import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//to pass values back and forth
import { CompMakeServiceComponent } from '../comp-make-service/comp-make-service.component';
import { ServTestService } from '../servtest.service';

@Component({
  selector: 'app-comp-list-all',
  templateUrl: './comp-list-all.component.html',
  styleUrls: ['./comp-list-all.component.css']
})
export class CompListAllComponent {


  url = 'http://localhost:3000/services/64494896c7234c797a7e1fa3'
  constructor(private httpClient:HttpClient, servTestService:ServTestService){}
  
json: JSON[] = []



/*
   ngOnInit(){
      this.servTestService.getPosts()
      .subscribe(response => {
        this.json = response
      })
    }
*/ 
    getHeapCodeStatistics(){
      return this.httpClient.get(this.url)
    }

newDue = -1
newName = "Default"
newPrice = -1.11
newMonthly = false
newPayDay = -1

//These are the ones that will show up inside the lists
currNames:JSON[] = []
currDaysTillDue:JSON[] = []
currPayDays:JSON[] = []
currPrice:JSON[] = []

loadServices(){
  console.log('Beginning load')
  this.httpClient.get(this.url)
  
}



/*async fetchData() {

  const response = await fetch(this.url);
  const data = await response.json();

  data.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
          console.log(`${key} ${value}`);
      });
      console.log('-------------------');
  });
}
*/

}
