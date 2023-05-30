import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServTestService } from '../servtest.service';

@Component({
  selector: 'app-comp-change-service',
  templateUrl: './comp-change-service.component.html',
  styleUrls: ['./comp-change-service.component.css']
})
export class CompChangeServiceComponent {

  
  constructor(private servTestService: ServTestService) { }
json:any
  onModification(serviceInfo: {service:String, price:Number, dueDate:Date}){
console.log(serviceInfo)

  }
  ngOnInit() {
    this.servTestService.getPosts()
      .subscribe(response => {
        this.json = response
      })
  }
}
