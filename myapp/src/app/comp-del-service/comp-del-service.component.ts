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



base = "http://localhost:3000/services/"

pickServToChange(){
  var selection = <HTMLInputElement>document.getElementById("servicesToKill")
  var selectionString = selection.value
  console.log(selectionString)
  console.log(this.json)
  var stringJSON = JSON.stringify(this.json)
  var stringID = "ERROR"
  console.log("Beginning Killer")
  for (var i in this.json){
    console.log(JSON.stringify(this.json[i]))
    console.log(stringJSON) //logs stringJSON correctly
    if (this.json[i].service == (selectionString)){
      console.log(JSON.stringify(this.json[i]))
      console.log("Success")
      /////////////////////
      //Issues start here//
      ////////////////////
      console.log(stringID) 
      stringID = JSON.stringify(this.json[i]._id)
      console.log(stringID)   
    }
    //this is meant to be used to pick which _id to use
  }
  return(stringID)
  }
deleteService() {

  var martyr = this.pickServToChange()
  console.log(martyr)
  var newURL = `http://localhost:3000/services/` + JSON.parse(martyr)
  console.log(newURL)

  this.servTestService.delete(newURL )
  .subscribe(response => {
    console.log("service deleted")
  })
  location.reload()
}

}