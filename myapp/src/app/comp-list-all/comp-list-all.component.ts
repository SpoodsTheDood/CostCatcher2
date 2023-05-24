import { Component, Input } from '@angular/core';
import { ServTestService } from '../servtest.service';


@Component({
  selector: 'app-comp-list-all',
  templateUrl: './comp-list-all.component.html',
  styleUrls: ['./comp-list-all.component.css']
})
export class CompListAllComponent {

  json: any

  constructor(private servTestService: ServTestService) { }

  updateDate(oldDate:string, billingPd:string){
    //
    var newDate = new Date()
    var dayCt = 0
    var monDayYear = oldDate.split(" ")
    if(billingPd = "mnthDate"){
    var daysWith30 = ["April", "June", "September", "November"]
    if (monDayYear[0] in daysWith30) dayCt = 30
    else if (monDayYear[0] = "February") dayCt = 28
    else dayCt = 31
    }
    if (billingPd = "mnthSet") dayCt = 30
    if (billingPd = "wkly") dayCt = 7
    if (billingPd = "biwk") dayCt = 14
  }

  ngOnInit() {
    this.servTestService.getPosts()
      .subscribe(response => {
        this.json = response
      })
  }

}
