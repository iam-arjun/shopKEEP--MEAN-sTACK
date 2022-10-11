import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../datamodel/customerModel';
import { CustomerTrans } from '../datamodel/customerTransModel';
import { MyserviceService } from '../myservice.service';
import { NavbarHeaderComponent } from '../navbar-header/navbar-header.component';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.css']
})
export class MainPageContentComponent implements OnInit {

  mainPageArr:CustomerModel[]=[]
  mainPageTransArr:CustomerTrans[]=[]

  constructor(private _service:MyserviceService) { }

  ngOnInit(): void {
    // this._service.getcustomer().subscribe((res:CustomerModel[])=>{
    //   this.mainPageArr = res
    // },(error)=>{
    //   console.log(error)
    // })

    this._service.getCustomerTrans().subscribe((res:CustomerTrans[])=>{
      this.mainPageTransArr = res

    })
    
  }
  additional_cutomerForm(){
    this._service.addNewStatus_formainpage.next(false)
   this._service.addNewStatus_forcustomerform.next(true)
   }




}
