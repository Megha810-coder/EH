import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Ehs} from '../../ehs';
import {EhsService} from '../../ehs.service';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-hazardous-form',
  templateUrl: './hazardous-form.component.html',
  styleUrls: ['./hazardous-form.component.scss']
})
export class HazardousFormComponent implements OnInit {

  chemical_name:any;
  formula:any;
  odor_name:any;
  synonyms:any;
  prod_code:any;
  supplier_name:any;
  supplier_address:any;
  supplier_phone:any;
  phy_state:any;
  vapor_pressure:any;
  json_data:any;

  
  constructor(private http: HttpClient,private ehsService: EhsService) { }
  public ehs:Ehs;
  readonly APP_URL = 'http://localhost:8082/ERP-Company/';
    ngOnInit() {
        this.ehs = this.ehsService.getter();
    console.log("*****",this.ehs)
  }
 
onClickSubmit(data) {
  console.log(data);
 
  if(this.ehs.hazard_id==undefined){
    this.ehsService.createHazardous(this.ehs).subscribe((ehs)=>{
      console.log(ehs);
    },(error)=>{
      console.log(error);
    });
  }
  else{
    this.ehsService.updateHazardous(this.ehs).subscribe((ehs)=>{
      console.log(ehs);
    },(error)=>{
      console.log(error);
    });
  }
  // this.http.post(this.APP_URL +'ehs/save_hazardous', JSON.stringify(data))
  //   .subscribe(res => {
  //          console.log('inside postmehtod of sub.function', res);//only objects
  //       })
    
}
@ViewChild('infoModal') public infoModal: ModalDirective;

}
