import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule} from '@angular/material/card';
import { CompUpcomingComponent } from './comp-upcoming/comp-upcoming.component';
import { CompListAllComponent } from './comp-list-all/comp-list-all.component';
import { CompMakeServiceComponent } from './comp-make-service/comp-make-service.component';
import { CompUserloginComponent } from './comp-userlogin/comp-userlogin.component';

import { HttpClientModule } from '@angular/common/http';
import { ServTestService } from './servtest.service';
import { CompDelServiceComponent } from './comp-del-service/comp-del-service.component';
import { CompChangeServiceComponent } from './comp-change-service/comp-change-service.component';

//import { CardModule } from '@coreui/angular'

//import { AnimationEvent } from '@angular/animations';
@NgModule({
  declarations: [
    AppComponent,
    CompUpcomingComponent,
    CompListAllComponent,
    CompMakeServiceComponent,
    CompUserloginComponent,
    CompDelServiceComponent,
    CompChangeServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent, CompUpcomingComponent, CompListAllComponent, CompMakeServiceComponent,ServTestService]
})
export class AppModule { }
