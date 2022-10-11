import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../datamodel/customerModel';
import { MyserviceService } from '../myservice.service';
import { CustomPipePipe } from '../customPipes/FilterPipe';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {
  Search_arr: CustomerModel[] = []
  namesearch: string = ''

  customerName: string = ''

  constructor(private _service: MyserviceService) { }

  ngOnInit(): void {
    this._service.getcustomer().subscribe((res: CustomerModel[]) => {
      this.Search_arr = res;
    }, (error) => {
      console.log(error);
    })
  }
  again_transPage(_customerName) {
    this._service.customerSt.next(true)
    this._service.searchstatus.next(false)
    this.customerName = _customerName.innerText;
    console.log(this.customerName)
    this._service.customername.next(this.customerName)

  }


}
