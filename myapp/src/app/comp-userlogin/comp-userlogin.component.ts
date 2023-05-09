import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-comp-userlogin',
  templateUrl: './comp-userlogin.component.html',
  styleUrls: ['./comp-userlogin.component.css']
})
export class CompUserloginComponent {
  //user login
  constructor (private httpClient:HttpClient){}
login(){
  var username:any = document.getElementById("username")
  var password:any = document.getElementById("password")
  this.httpClient.get("http://localhost:3000/users/644947e06853dc3d8bdd603c").subscribe( res =>{
      
  })
}
}
