import { Component } from '@angular/core';
import { ServTestService } from '../servtest.service';

@Component({
  selector: 'app-comp-del-service',
  templateUrl: './comp-del-service.component.html',
  styleUrls: ['./comp-del-service.component.css']
})
export class CompDelServiceComponent {
json:any
constructor(private servTestService: ServTestService) { }
ngOnInit() {
  this.servTestService.getPosts()
    .subscribe(response => {
      this.json = response
    })
}
}
