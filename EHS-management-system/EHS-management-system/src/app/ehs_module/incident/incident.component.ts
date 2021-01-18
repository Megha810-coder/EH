import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Ehs} from '../../ehs';
import {EhsService} from '../../ehs.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {
  myresponse: any;
  myresponse1:any;
  myresponse2:any;
  myresponse3:any;
  i:number;
   j:number;
   k:number;
   m:number;
   l:number;
   n:number;
   p:number;
  constructor(private router: Router,private _http: HttpClient,private ehsService: EhsService) {
 
   }
   readonly APP_URL = 'http://localhost:8082/ERP-Company/'; 
   public user:Ehs[];
  ngOnInit(): void {
    this._http.get(this.APP_URL + 'ehs/mng_incident').subscribe(
      result => {

        console.log('hiii') ;
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );
    this._http.get(this.APP_URL + 'ehs/mng_incident1').subscribe(
      result1 => {

        console.log('hiii') ;
        this.myresponse1 = result1 ;
        console.log('this.myresponse1', this.myresponse1);
      },
      error => {
        console.log('Error occured', error);
      }
    );

    this._http.get(this.APP_URL + 'ehs/mng_incident2').subscribe(
      result2=> {
        console.log('hiii') ;
        this.myresponse2 = result2 ;
        console.log('this.myresponse2', this.myresponse2);
      },
      error => {
        console.log('Error occured', error);
      }
    );

    this._http.get(this.APP_URL + 'ehs/mng_incident3').subscribe(
      result3=> {
        console.log('hiii') ;
        this.myresponse3 = result3 ;
        console.log('this.myresponse3', this.myresponse3);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  updateIncident(ehs1){

    for (this.i = 0; this.i <= this.myresponse3.length; this.i++) 
    {
      this.j = this.myresponse3[this.i].action_id_;
      if (ehs1.action_id == this.j) 
      {
        for (this.l = 0; this.l <= this.myresponse2.length; this.l++) 
        {
          this.m = this.myresponse2[this.l].action_id_;
          if (ehs1.action_id == this.m) 
          {
            for (this.j = 0; this.j<= this.myresponse1.length; this.j++) 
            {
          this.p = this.myresponse1[this.j].action_id_;
          if (ehs1.action_id == this.p) 
           {
            for (this.k = 0; this.k <= this.myresponse.length; this.k++) 
            {
              if (this.myresponse[this.k].action_id == ehs1.action_id) 
              {
                var incident2 = {
                  "witnesed_id":this.myresponse1[this.j].witnesed_id,
                  "witness_name":this.myresponse1[this.j].witness_name,
                  "witness_fname":this.myresponse1[this.j].witness_fname,
                  "witness_lname":this.myresponse1[this.j].witness_lname,
                  "witness_mname":this.myresponse1[this.j].witness_mname,
                  "wit_dept":this.myresponse1[this.j].wit_dept,
                  "witness_phone":this.myresponse1[this.j].witness_phone,
                  "witness_email":this.myresponse1[this.j].witness_email
                };

                var incident3 = {
                  "treatment_id":this.myresponse2[this.l].treatment_id,
                  "ini_tre":this.myresponse2[this.l].ini_tre,
                  "sec_name":this.myresponse2[this.l].sec_name,
                  "hos_tre":this.myresponse2[this.l].hos_tre,
                  "tre_comment":this.myresponse2[this.l].tre_comment
                }

                var incident4 = {
                  "why_id":this.myresponse3[this.i].why_id,
                  "why1":this.myresponse3[this.i].why1,
                  "why2":this.myresponse3[this.i].why2,
                  "why3":this.myresponse3[this.i].why3,
                  "why4":this.myresponse3[this.i].why4,
                  "why5":this.myresponse3[this.i].why5,
                  "why6":this.myresponse3[this.i].why6,
                  "why7":this.myresponse3[this.i].why7,
                }

                var incident_each = this.myresponse[this.k];
                var ehs = _.merge(incident_each, incident2);
                var ehs1 = _.merge(ehs, incident3);
                var ehsAllTab = _.merge(ehs1,incident4)
                console.log("ehsAllTab:", ehsAllTab, "ehs1:", ehs1)
                this.ehsService.setter(ehsAllTab);
                this.router.navigate(['/ehs_module/IncidentForm']);


              }
            }
          }
        }
          }
        }

      }
    }
  }

  save()
  {
    let ehs =new Ehs();
    this.ehsService.setter(ehs);
    this.router.navigate(['/ehs_module/IncidentForm']);
  }

  viewIncident(ehs1){
    for (this.i = 0; this.i <= this.myresponse3.length; this.i++) 
    {
      this.j = this.myresponse3[this.i].action_id_;
      if (ehs1.action_id == this.j) 
      {
        for (this.l = 0; this.l <= this.myresponse2.length; this.l++) 
        {
          this.m = this.myresponse2[this.l].action_id_;
          if (ehs1.action_id == this.m) 
          {
            for (this.j = 0; this.j<= this.myresponse1.length; this.j++) 
            {
          this.p = this.myresponse1[this.j].action_id_;
          if (ehs1.action_id == this.p) 
           {
            for (this.k = 0; this.k <= this.myresponse.length; this.k++) 
            {
              if (this.myresponse[this.k].action_id == ehs1.action_id) 
              {
                var incident2 = {
                  "witnesed_id":this.myresponse1[this.j].witnesed_id,
                  "witness_name":this.myresponse1[this.j].witness_name,
                  "witness_fname":this.myresponse1[this.j].witness_fname,
                  "witness_lname":this.myresponse1[this.j].witness_lname,
                  "witness_mname":this.myresponse1[this.j].witness_mname,
                  "wit_dept":this.myresponse1[this.j].wit_dept,
                  "witness_phone":this.myresponse1[this.j].witness_phone,
                  "witness_email":this.myresponse1[this.j].witness_email,
                  "full_witname":this.myresponse1[this.j].full_witname
                };

                var incident3 = {
                  "treatment_id":this.myresponse2[this.l].treatment_id,
                  "ini_tre":this.myresponse2[this.l].ini_tre,
                  "sec_name":this.myresponse2[this.l].sec_name,
                  "hos_tre":this.myresponse2[this.l].hos_tre,
                  "tre_comment":this.myresponse2[this.l].tre_comment
                }

                var incident4 = {
                  "why_id":this.myresponse3[this.i].why_id,
                  "why1":this.myresponse3[this.i].why1,
                  "why2":this.myresponse3[this.i].why2,
                  "why3":this.myresponse3[this.i].why3,
                  "why4":this.myresponse3[this.i].why4,
                  "why5":this.myresponse3[this.i].why5,
                  "why6":this.myresponse3[this.i].why6,
                  "why7":this.myresponse3[this.i].why7,
                }

                var incident_each = this.myresponse[this.k];
                var ehs = _.merge(incident_each, incident2);
                var ehs1 = _.merge(ehs, incident3);
                var ehsAllTab = _.merge(ehs1,incident4)
                console.log("ehsAllTab:", ehsAllTab, "ehs1:", ehs1)
                this.ehsService.setter(ehsAllTab);
                this.router.navigate(['/ehs_module/view_incident']);


              }
            }
          }
        }
          }
        }

      }
    }
    
  }

  deleteIncident(id){
    this._http.get(this.APP_URL + 'ehs/delete_incident?incident_id='+id).subscribe(
      result => {
        alert("delete successfully!!!!");
        if(this.myresponse==true){
        this.router.navigate(['/ehs_module/Incident']);
        }
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
       
      },
      error => {
        console.log('Error occured', error);
      }
    );

  }

}
