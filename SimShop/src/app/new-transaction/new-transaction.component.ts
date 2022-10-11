import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerTrans } from '../datamodel/customerTransModel';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit, AfterViewInit {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  search_status: boolean = false;
  namesearch: string;
  parent_status: boolean = true;
  newTrans: FormGroup;
  customerName: string = ''
  Edit_mode: boolean;


  constructor(private _service: MyserviceService, private fb: FormBuilder, private renderer: Renderer2, private rend: Renderer2) {
  }


  ngOnInit(): void {
    this._service.customername.subscribe(res => {
      this.customerName = res
      console.log(this.customerName)
    })
    this.newTrans = this.fb.group({
      Date: ['', Validators.required],
      Name: [this.customerName, Validators.required],
      Type: ['', Validators.required],
      Amount: ['', Validators.required],
      Remarks: ['', Validators.required],


    })
  }
  ngAfterViewInit(): void {
  }

  save_trans() {
    if (this.newTrans.valid) {
      
        this._service.addNewStatus_formainpage.next(true);
        this._service.show_newTrans.next(false)
        this._service.add_transaction(this.newTrans.value).subscribe((res: CustomerTrans[]) => {
          console.log(res)


        }, (error) => {
          console.log(error)
        })



    }
    else {
      alert('Fill the form correctly...')
    }

  }


  search_page() {

    this._service.searchstatus.next(true)
    this._service.customerSt.next(false)

  }




}
