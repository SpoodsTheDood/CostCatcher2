import { Injectable } from '@angular/core';
import { CompMakeServiceComponent } from './comp-make-service/comp-make-service.component';
import { CompListAllComponent } from './comp-list-all/comp-list-all.component';
import { CompUpcomingComponent } from './comp-upcoming/comp-upcoming.component';
import { CompUserloginComponent } from './comp-userlogin/comp-userlogin.component';
import { Bills } from './Bills';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServTestService {

  /*getServices(): Bills[] {
    return 
  }*/
  constructor(private httpClient:HttpClient) {  }

  private url = 'http://loclahost:3000/services'

getPosts(){
  return this.httpClient.get(this.url)
}


  listAllNames:JSON[] = []
  listAllDaysTillDue:JSON[] = []
  listAllPrices: JSON[] = []
  currPayDays: JSON[] = []



}
