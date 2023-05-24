import { Component, Input } from '@angular/core';
import { ServTestService } from '../servtest.service';

@Component({
  selector: 'app-comp-upcoming',
  templateUrl: './comp-upcoming.component.html',
  styleUrls: ['./comp-upcoming.component.css']
})
export class CompUpcomingComponent {
//this will be the card that appear for the bills with the closest due dates

json: any
  
constructor(private servTestService: ServTestService) {}

 ngOnInit(){
    this.servTestService.getPosts()
    .subscribe(response => {
      this.json = response
    })
  }


}
