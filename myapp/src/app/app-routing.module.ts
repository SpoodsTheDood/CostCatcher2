import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CompMakeServiceComponent } from './comp-make-service/comp-make-service.component';
import { CompDelServiceComponent } from './comp-del-service/comp-del-service.component';
import { CompChangeServiceComponent } from './comp-change-service/comp-change-service.component';

const routes: Routes = [
  { path: '', component:AppComponent },
  { path: 'add', component:CompMakeServiceComponent},
  { path: 'transpose', component:CompChangeServiceComponent},
  { path: 'subtract', component:CompDelServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
