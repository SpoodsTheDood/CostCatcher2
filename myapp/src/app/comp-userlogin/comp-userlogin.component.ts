import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-comp-userlogin',
  templateUrl: './comp-userlogin.component.html',
  styleUrls: ['./comp-userlogin.component.css']
})
export class CompUserloginComponent {
  constructor (private httpClient:HttpClient){}
login(){
  var username = document.getElementById("username")
  var password = document.getElementById("password")
  this.httpClient.get("localhost:3000").subscribe( res =>{
      
  })
}
}
