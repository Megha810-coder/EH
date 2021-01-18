import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Ehs} from '../../ehs';
import {EhsService} from '../../ehs.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-hazardous-mngt',
  templateUrl: './hazardous-mngt.component.html',
  styleUrls: ['./hazardous-mngt.component.scss']
})
export class HazardousMngtComponent implements OnInit {
  
  myresponse: any;
  myresponse_2: any;
  myresponse_3: any;
   i:number;
   j:number;
   k:number;
   m:number;
   l:number;
   n:number;
  constructor(private router: Router,private _http: HttpClient,private ehsService: EhsService) {
 
   }
   readonly APP_URL = 'http://localhost:8082/ERP-Company/'; 
   public user:Ehs[];
  ngOnInit(): void {
    this._http.get(this.APP_URL + 'ehs/mng_hazardous').subscribe(
      result => {

        console.log('hiii') ;
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );
    this._http.get(this.APP_URL + 'ehs/mng_hazardous_2').subscribe(
      result => {

        console.log('hiii') ;
        this.myresponse_2 = result ;
        console.log('this.myresponse_2', this.myresponse_2);
      },
      error => {
        console.log('Error occured', error);
      }
    );
     this._http.get(this.APP_URL + 'ehs/mng_hazardous_3').subscribe(
       result => {

         console.log('hiii') ;
         this.myresponse_3= result ;
         console.log('this.myresponse_3', this.myresponse_3);
       },
     error => {
         console.log('Error occured', error);
       }
     );
  }

  updateHazardous(ehs1)
  {
    for (this.i = 0; this.i <= this.myresponse_2.length; this.i++) 
    {
      this.j = this.myresponse_2[this.i].hazard_id_;
      if (ehs1.hazard_id == this.j) 
      {
        for (this.l = 0; this.l <= this.myresponse_3.length; this.l++) 
        {
          this.m = this.myresponse_3[this.l].hazard_id_first;
          if (ehs1.hazard_id == this.m) 
          {
            for (this.k = 0; this.k <= this.myresponse.length; this.k++) 
            {
              if (this.myresponse[this.k].hazard_id == ehs1.hazard_id) 
              {
                var hazardous_tab2 = {
                  "identification_id":this.myresponse_2[this.i].identification_id,
                  "skin_contact": this.myresponse_2[this.i].skin_contact, "eye_contact": this.myresponse_2[this.i].eye_contact, "inhalation": this.myresponse_2[this.i].inhalation,
                  "toxic_effect": this.myresponse_2[this.i].toxic_effect, "RA1": this.myresponse_2[this.i].RA1, "RA2": this.myresponse_2[this.i].RA2,
                  "RA3": this.myresponse_2[this.i].RA3, "RA4": this.myresponse_2[this.i].RA4, "RA5": this.myresponse_2[this.i].RA5
                };

                var hazardous_tab3 = {
                  "skin_contacts": this.myresponse_3[this.l].skin_contacts, "eye_contacts": this.myresponse_3[this.l].eye_contacts, "inhalations": this.myresponse_3[this.l].inhalations,
                  "first_id": this.myresponse_3[this.l].first_id, "hazard_id_first": this.myresponse_3[this.l].hazard_id_first
                }

                var hazardous_each = this.myresponse[this.k];
                var ehs = _.merge(hazardous_each, hazardous_tab2);
                var ehsAllTab = _.merge(ehs, hazardous_tab3);
                console.log("ehsAllTab:", ehsAllTab, "hazardous_tab3:", hazardous_tab3)
                this.ehsService.setter(ehsAllTab);
                this.router.navigate(['/ehs_module/HazardousForm']);


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
    this.router.navigate(['/ehs_module/NewHazardous']);
  }

  viewHazardous(ehs1){
    for (this.i = 0; this.i <= this.myresponse_2.length; this.i++) 
    {
      this.j = this.myresponse_2[this.i].hazard_id_;
      if (ehs1.hazard_id == this.j) 
      {
        for (this.l = 0; this.l <= this.myresponse_3.length; this.l++) 
        {
          this.m = this.myresponse_3[this.l].hazard_id_first;
          if (ehs1.hazard_id == this.m) 
          {
            for (this.k = 0; this.k <= this.myresponse.length; this.k++) 
            {
              if (this.myresponse[this.k].hazard_id == ehs1.hazard_id) 
              {
                var hazardous_tab2 = {
                  "identification_id":this.myresponse_2[this.i].identification_id,
                  "skin_contact": this.myresponse_2[this.i].skin_contact, "eye_contact": this.myresponse_2[this.i].eye_contact, "inhalation": this.myresponse_2[this.i].inhalation,
                  "toxic_effect": this.myresponse_2[this.i].toxic_effect, "RA1": this.myresponse_2[this.i].RA1, "RA2": this.myresponse_2[this.i].RA2,
                  "RA3": this.myresponse_2[this.i].RA3, "RA4": this.myresponse_2[this.i].RA4, "RA5": this.myresponse_2[this.i].RA5
                };

                var hazardous_tab3 = {
                  "skin_contacts": this.myresponse_3[this.l].skin_contacts, "eye_contacts": this.myresponse_3[this.l].eye_contacts, "inhalations": this.myresponse_3[this.l].inhalations,
                  "first_id": this.myresponse_3[this.l].first_id, "hazard_id_first": this.myresponse_3[this.l].hazard_id_first
                }

                var hazardous_each = this.myresponse[this.k];
                var ehs = _.merge(hazardous_each, hazardous_tab2);
                var ehsAllTab = _.merge(ehs, hazardous_tab3);
                console.log("ehsAllTab:", ehsAllTab, "hazardous_tab3:", hazardous_tab3)
                this.ehsService.setter(ehsAllTab);
                this.router.navigate(['/ehs_module/view_hazard']);


              }
            }
          }
        }

      }
    }
  }

  deleteHazardous(id){
    this._http.get(this.APP_URL + 'ehs/delete_hazard?hazard_id='+id).subscribe(
      result => {
        //alert("delete successfully!!!!");
        console.log('hiii') ;
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
  
}