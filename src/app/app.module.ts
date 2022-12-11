import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmloginComponent } from './admlogin/admlogin.component';
import { AdmnavbarComponent } from './admnavbar/admnavbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdmdashboardComponent } from './admdashboard/admdashboard.component';

const myroutes:Routes = [
  {
    path:"",
    component:AdmloginComponent
  },
  {
    path:"/dboard",
    component:AdmdashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdmloginComponent,
    AdmnavbarComponent,
    AdmdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
