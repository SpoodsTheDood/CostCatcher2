import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-change-service',
  templateUrl: './comp-change-service.component.html',
  styleUrls: ['./comp-change-service.component.css']
})
export class CompChangeServiceComponent {

  url = "http://localhost:3000/services/646f795436775478bda0003f"
  constructor(private httpClient:HttpClient){

  }

  onModification(serviceInfo: {service:String, price:Number, dueDate:Date}){
console.log(serviceInfo)
this.httpClient.put(this.url, serviceInfo)
.subscribe((res) =>{
  console.log(res)
})
  }
}
