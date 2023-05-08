import { Injectable } from '@angular/core';
import { CompMakeServiceComponent } from './comp-make-service/comp-make-service.component';
import { CompListAllComponent } from './comp-list-all/comp-list-all.component';
import { CompUpcomingComponent } from './comp-upcoming/comp-upcoming.component';
import { CompUserloginComponent } from './comp-userlogin/comp-userlogin.component';
import { Bills } from './Bills';

@Injectable({
  providedIn: 'root'
})
export class ServTestService {

  

  constructor() { }

  listAllNames:JSON[] = []
  listAllDaysTillDue:JSON[] = []
  listAllPrices: JSON[] = []
  currPayDays: JSON[] = []

}
