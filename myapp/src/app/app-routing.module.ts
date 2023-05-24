import { NgModule } from '@angular/core';import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CompMakeServiceComponent } from './comp-make-service/comp-make-service.component';

const routes: Routes = [
  { path: '', component:AppComponent },
  { path: 'add', component:CompMakeServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
