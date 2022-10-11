import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MyserviceService } from '../myservice.service';



@Component({
  selector: 'app-homepage-dashboard',
  templateUrl: './homepage-dashboard.component.html',
  styleUrls: ['./homepage-dashboard.component.css']
})
export class HomepageDashboardComponent implements OnInit {
  showFiller = false;
  dashboard_status:boolean = false;


  constructor(public dialog: MatDialog,private _service:MyserviceService) { }

  ngOnInit(): void {
  }



 

  
}