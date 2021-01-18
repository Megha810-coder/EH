import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EhsService } from '../../ehs.service';
import { Ehs } from '../../ehs';
import * as _ from 'lodash';

@Component({
  selector: 'app-waste-mngt',
  templateUrl: './waste-mngt.component.html',
  styleUrls: ['./waste-mngt.component.scss']
})
export class WasteMngtComponent implements OnInit { myresponse: any;


  public user:Ehs[];
  generation:any;
  collection_1:any;
  collection:any;
  storage_1:any;
  myresponse_1:any;
  i:number;
  j:number;
  k:number;
  constructor(private router: Router,private _http: HttpClient,private ehsService: EhsService) {
 
   }
   readonly APP_URL = 'http://localhost:8082/ERP-Company/'; 

  ngOnInit(): void {
    this._http.get(this.APP_URL + 'ehs/mng_waste_list').subscribe(
      result => {

        console.log('hiii') ;
        this.myresponse = result ;
       
        console.log('this.myresponse', this.myresponse);
      },
      error => {
        console.log('Error occured', error);
      }
   );
   this._http.get(this.APP_URL + 'ehs/mng_wasteTrans_list').subscribe(
    result => {

      console.log('hiii') ;
      this.myresponse_1 = result ;
     
      console.log('this.myresponse_1', this.myresponse_1);
    },
    error => {
      console.log('Error occured', error);
    }
 );


  }

  updateWaste(ehs){
  
    // for(this.i=0;this.i<=this.myresponse.length;this.i++){
    //   this.j=this.myresponse[this.i].waste_id;
    
    //   if(this.j==ehs.waste_id){
    //   this.generation=this.myresponse[this.i].generation;
    //   alert(  this.generation);
    //   if(this.generation!=2){
    //     ehs.generation_1=false;
    //   }
    //   else{
    //     ehs.generation_2=false;
    //   }
    //   // this.ehsService.setter(ehs);
    //   // this.router.navigate(['/ehs_module/NewWaste']);
    //   }
    // }

    for (this.i = 0; this.i <= this.myresponse_1.length; this.i++) 
    {
      this.j = this.myresponse_1[this.i].waste_id_;
      if (ehs.waste_id == this.j) 
      {
        for (this.k = 0; this.k <= this.myresponse.length; this.k++) 
        {
          if (this.myresponse[this.k].waste_id == ehs.waste_id) 
          {
          
            var waste_tab1 = {
              "trans_id":this.myresponse_1[this.i].trans_id,
              "veh_name":this.myresponse_1[this.i].veh_name,
              "veh_number":this.myresponse_1[this.i].veh_number,
              "material_qty":this.myresponse_1[this.i].material_qty,
              "dis_name":this.myresponse_1[this.i].dis_name,
              "disposal_date":this.myresponse_1[this.i].disposal_date,
              "waste_id_":this.myresponse_1[this.i].waste_id_,
             
            };

            var waste_each = this.myresponse[this.k];
            var ehs = _.merge(waste_each, waste_tab1);
            this.ehsService.setter(ehs);
            this.router.navigate(['/ehs_module/NewWaste']);
          }
        }

      }
    }
  
  }

  save()
  {
    let ehs =new Ehs();
    this.ehsService.setter(ehs);
    this.router.navigate(['/ehs_module/NewWaste']);
  }


  viewWaste(ehs){
    
    for (this.i = 0; this.i <= this.myresponse_1.length; this.i++) 
    {
      this.j = this.myresponse_1[this.i].waste_id_;
      if (ehs.waste_id == this.j) 
      {
        for (this.k = 0; this.k <= this.myresponse.length; this.k++) 
        {
          if (this.myresponse[this.k].waste_id == ehs.waste_id) 
          {
            var waste_tab1 = {
              "trans_id":this.myresponse_1[this.i].trans_id,
              "veh_name":this.myresponse_1[this.i].veh_name,
              "veh_number":this.myresponse_1[this.i].veh_number,
              "material_qty":this.myresponse_1[this.i].material_qty,
              "dis_name":this.myresponse_1[this.i].dis_name,
              "disposal_date":this.myresponse_1[this.i].disposal_date,
              "waste_id_":this.myresponse_1[this.i].waste_id_
            };

            var waste_each = this.myresponse[this.k];
            var ehs = _.merge(waste_each, waste_tab1);
            this.ehsService.setter(ehs);
            this.router.navigate(['/ehs_module/view_waste']);
          }
        }

      }
    }
  
  }

  deleteWaste(id){
    this._http.get(this.APP_URL + 'ehs/delete_waste?waste_id='+id).subscribe(
      result => {
        alert("delete successfully!!!!");
        window.location.reload()
        // this.router.navigate(['/ehs_module/Waste']);
       
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
       
      },
      error => {
        console.log('Error occured', error);
      }
    );

  }


}
