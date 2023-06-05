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


  ngOnInit() {
    this.servTestService.getPosts()
      .subscribe(response => {
        this.json = response
      })
  }

}
