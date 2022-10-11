import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {
  main_page_content_display: boolean = true;
  allcustomer_display: boolean = false;
  new_customer_display: boolean = false;
  new_transaction_display: boolean = false;
  Allcontent_show: boolean = true;
  commonstatus: Boolean
  searchStatus: boolean = false;
  transaction_status: boolean = true;



  constructor(private _service: MyserviceService) { }


  ngOnInit(): void {
    this._service.searchstatus.subscribe((res: boolean) => {
      this.searchStatus = res
      console.log(this.searchStatus)

    })
    this._service.customerSt.subscribe(res => {
      this.transaction_status = res
      
    })
    this._service.show_allCustomer.subscribe(res=>{
      this.allcustomer_display = res
      
    })
    this._service.new_customer.subscribe(res=>{
      this.new_customer_display = res
    })
    this._service.addNewStatus_formainpage.subscribe(res=>{
      this.main_page_content_display = res
    })
    this._service.addNewStatus_forcustomerform.subscribe(res=>{
      this.new_customer_display  = res
    })
    this._service.show_newTrans.subscribe(res=>{
      this.new_transaction_display = res
 
    })

  }
  
  homepage_status() {
    this.main_page_content_display = true;

    this.allcustomer_display = false;
    this.new_customer_display = false;
    this.searchStatus = false;
    this.new_transaction_display = false;
  }
  new_customer_status() {
    this.new_customer_display = true;
    this.allcustomer_display = false;

    this.main_page_content_display = false;
    this.new_transaction_display = false;
    this.searchStatus = false;
    this._service.edit_mode.next(false)
    
            


  }
  newtransaction_status() {

    this.new_transaction_display = true;
    this.main_page_content_display = false;
    this.new_customer_display = false;
    this.allcustomer_display = false;
    this.searchStatus = false;
    this.transaction_status = true;
    this.searchStatus = false;


  }
  allcustomer_status() {

    this.allcustomer_display = true;
    this.new_customer_display = false;
    this.new_transaction_display = false;
    this.searchStatus = false;
    this.main_page_content_display = false;




  }
}
