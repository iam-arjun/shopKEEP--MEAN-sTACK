import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, throwError } from 'rxjs';
import { CustomerModel } from '../datamodel/customerModel';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {
  customer_form: FormGroup
  customer_arr: CustomerModel[] = []
  newcustomerarr = []
  public EditMode: boolean = false;
  public customer_id: string


  constructor(private fb: FormBuilder, private _service: MyserviceService) {



  }

  ngOnInit(): void {
    this.get_customer_info()

    this._service.edit_mode.subscribe(res => {
      this.EditMode = res
      console.log(res)
    })




    this.customer_form = this.fb.group({

      _id: [''],

      Name: ['', Validators.required],
      Email: ['', Validators.required],
      Phone: ['', Validators.required],
      Address: ['', Validators.required]

    })



    if (this.EditMode) {
      this._service.customerId.subscribe(res => {
        this.customer_id = res
        console.log(this.customer_id)
        this._service.customerInfo.subscribe((res: CustomerModel[]) => {
          console.log(res)
          let filterData = res.find(x => x._id === this.customer_id)
          console.log(filterData)
          this.customer_form.patchValue(filterData)
        })

      })
    }
    else{
      this.customer_form.patchValue(null)
    }




  }

  onsubmit() {



    if (this.EditMode == true) {
      this._service.new_customer.next(false)
      this._service.show_allCustomer.next(true)
      this._service.updateCustomer(this.customer_form.value).subscribe(res => {
        console.log(res)

        this.get_customer_info()
      }, (err) => {
        console.log(err)
      })

    }
    else {
      console.log(this.customer_form)
      this._service.add_customer(this.customer_form.value).subscribe((res) => {
        console.log('after post')
        console.log(res)
        this.get_customer_info()

      }, error => {
        console.log(error)
      })
      this._service.show_allCustomer.next(true)

      this._service.new_customer.next(false)
    }



  }

  get_customer_info() {


    this._service.getcustomer().subscribe((res: CustomerModel[]) => {
      console.log('after get')

      this._service.customerInfo.next(res)

      this._service.customerInfo.subscribe((res: CustomerModel[]) => {
        this.customer_arr = res
      })
      console.log(this.customer_arr)


    }, error => {
      console.log(error)
    })

  }











}
