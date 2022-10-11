import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';
import { CustomerModel } from './datamodel/customerModel';

import { BehaviorSubject, Subject } from 'rxjs';
import { CustomerTrans } from './datamodel/customerTransModel';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private url  =  "http://localhost:8000/customerInfo";
  private trans_url = "http://localhost:8000/customerInfo/customerTrans"
  


  constructor(public dialog: MatDialog,private http:HttpClient) { }

  


  add_customer(_customer:CustomerModel){
    
    return this.http.post(this.url,_customer)

  }
  getcustomer(){
    return this.http.get(this.url)   
  }

// for customer transaction
add_transaction(Trans:CustomerTrans){
  return this.http.post(this.trans_url,Trans)
  
}

getCustomerTrans(){
  return this.http.get(this.trans_url)
}

updateCustomer(cust:CustomerModel){
  console.log(cust._id)
  return this.http.put(`${this.url}/${cust._id}`,cust)
}

deleteCustomer(id){
  return this.http.delete(`${this.url}/${id}`)
}







// ALL SUBJECTS ......................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//   // subject for storing the data of customer
 public customerInfo = new BehaviorSubject<CustomerModel[]>([])
 public customerForm = new BehaviorSubject(null)


 //subject for search comp
 public searchstatus = new BehaviorSubject(false)

//subject for displaying the list of customer in newTrans com
 public customerSt = new BehaviorSubject(true)


//subject after submission of form 
 public show_allCustomer = new BehaviorSubject(false)

//subject used for addnew button in mainpage
 public addNewStatus_formainpage = new BehaviorSubject(true)
 public addNewStatus_forcustomerform = new BehaviorSubject(false)
 public show_newTrans = new BehaviorSubject(false)
 public customername = new BehaviorSubject('')
 public edit_mode = new BehaviorSubject(false)
 public new_customer = new BehaviorSubject(null)
 public customerId= new BehaviorSubject('')

 
 






}
