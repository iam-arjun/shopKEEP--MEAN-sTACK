import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerModel } from '../datamodel/customerModel';
import { MyserviceService } from '../myservice.service';
import { NewcustomerComponent } from '../newcustomer/newcustomer.component';


@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.css']


})
export class AllcustomerComponent implements OnInit {
  customerArr: CustomerModel[] = []


  constructor(private _myservice: MyserviceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCustomerInfo()




  }
  showTransModal(id) {
    this._myservice.customerId.next(id)

  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  dlt(id: string) {
    if(confirm('Do you want to delete this user?')){
      
    this._myservice.deleteCustomer(id).subscribe((res) => {
      console.log("Delete customer ...")
      this.getCustomerInfo()

    }, err => {
      console.log(err)
    })
    }
    else{
      console.log('Customer info is not deleted')
    }


  }
  getCustomerInfo() {
    this._myservice.getcustomer().subscribe((res: CustomerModel[]) => {
      this.customerArr = res
    }, error => {
      console.log(error)
    })

  }

}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styleUrls: ['./allcustomer.component.css']
})
export class DialogElementsExampleDialog {
  customer_id: string = ''
  constructor(private _service: MyserviceService) { }
  allTransaction() {

  }
  edit() {
    this._service.edit_mode.next(true)
    this._service.new_customer.next(true)
    this._service.show_allCustomer.next(false)



  }


}



