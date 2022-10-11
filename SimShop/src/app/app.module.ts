import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageDashboardComponent } from './homepage-dashboard/homepage-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';



import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MyserviceService } from './myservice.service';
import { RouterModule, Routes } from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllcustomerComponent, DialogElementsExampleDialog } from './allcustomer/allcustomer.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { CustomPipePipe } from './customPipes/FilterPipe';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { MatSelectModule } from '@angular/material/select';
const route: Routes = [
  {
    path:'customer',component:NavbarHeaderComponent,children:[
      {path:'homepage',component:MainPageContentComponent},
      {
        path:'allcustomer',component:AllcustomerComponent
      }
      ,{
        path:'newtransaction',component:NewTransactionComponent ,children:[
          {
            path:'searchcustomer',component:SearchCustomerComponent
          }
        ]
      },
      {
        path:'newcustomer',component:NewcustomerComponent
      }
      
    ]
  },
  {path:'',redirectTo:'customer',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageDashboardComponent,

    AllcustomerComponent,
    NewTransactionComponent,
    MainPageContentComponent,
    NavbarHeaderComponent,
    NewcustomerComponent,
    CustomPipePipe,
    SearchCustomerComponent,
    DialogElementsExampleDialog

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule  ,
    FormsModule,  MatSelectModule,
  
  
  
  

    RouterModule.forRoot(route),
    ReactiveFormsModule




  ],
  providers: [{
    provide: MatDialogRef,
    
    useValue: {}
  },
  MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
