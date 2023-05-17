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
jsNames:JSON[] = []
jsDaysTillDue:JSON[] = []
jsPayDays:JSON[] = []
jsPrice:JSON[] = []
currNames:String[] = ["One", "Two", "Three", "Four"]
currDaysTillDue:Number[] = [1, 2, 3, 1]
currPayDays:String[] = ["MON", "BIWK", "MON", "WKLY"]
currPrice:Number[] = [1.11, 2.22, 3.33, 4.44]


loadServices(){
  var mashup = []
  for (var j = 0; j < this.currNames.length; j++){
    mashup.push({'name': this.currNames[j], 'dueIn': this.currDaysTillDue[j], 'price':this.currPrice[j]})
  }
  mashup.sort(function(a, b){
    return ((a.name < b.name) ? -1 : ((a.name == b.name) ? 0 : 1))
  })
  for (var k = 0; k < mashup.length; k++) {
    this.currNames[k] = mashup[k].name;
    this.currDaysTillDue[k] = mashup[k].dueIn;
    this.currPrice[k] = mashup[k].price
}
  
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
