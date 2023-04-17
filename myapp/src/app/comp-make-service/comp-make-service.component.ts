import { Component } from '@angular/core';
import { CompListAllComponent } from '../comp-list-all/comp-list-all.component';

@Component({
  selector: 'app-comp-make-service',
  templateUrl: './comp-make-service.component.html',
  styleUrls: ['./comp-make-service.component.css']
})
export class CompMakeServiceComponent {
  newDue = -1
newName = "Default"
newPrice = -1.11
newPayDay = -1

makeNewBill(inputDue:number, inputName:string, inputPrice:number, inputPayDay:number) {
  
}

}
