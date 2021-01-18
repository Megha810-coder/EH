import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-occupational',
  templateUrl: './occupational.component.html',
  styleUrls: ['./occupational.component.scss']
})
export class OccupationalComponent implements OnInit {myresponse: any;
  // employees = new Array<Employee>();
   title = 'Spring Mvc Angular Tutorial';
  // radioModel: string = 'Month';
  constructor(private router: Router,private _http: HttpClient) {
 
   }
   readonly APP_URL = 'http://localhost:8082/ERP-Company/'; 

 


    getAllTrainingList() {
   
   
    this._http.get(this.APP_URL + 'ehs/mng_occupational').subscribe(
      result => {

        console.log('hiii') ;
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  ngOnInit(): void {
  }

}
  