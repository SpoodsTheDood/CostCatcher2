import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule} from '@angular/material/card';
import { CompUpcomingComponent } from './comp-upcoming/comp-upcoming.component';
import { CompListAllComponent } from './comp-list-all/comp-list-all.component'
//import { CardModule } from '@coreui/angular'

//import { AnimationEvent } from '@angular/animations';
@NgModule({
  declarations: [
    AppComponent,
    CompUpcomingComponent,
    CompListAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent, CompUpcomingComponent, CompListAllComponent]
})
export class AppModule { }
