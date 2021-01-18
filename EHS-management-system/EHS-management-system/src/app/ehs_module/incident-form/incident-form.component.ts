import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Ehs} from '../../ehs';
import {EhsService} from '../../ehs.service';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})

export class IncidentFormComponent implements OnInit {

  public ehs:Ehs;
  constructor(private http: HttpClient,private ehsService: EhsService) { }
        
 readonly APP_URL = 'http://localhost:8082/ERP-Company/'; 

  ngOnInit() {
     this.ehs = this.ehsService.getter();
    // console.log("*****",this.ehs)
  }
 
 
onClickSubmit() {
 
  if(this.ehs.action_id==undefined){
   this.ehsService.createIncident(this.ehs).subscribe((ehs)=>{
     console.log(ehs);
   },(error)=>{
     console.log(error);
   });

       }
       else{
         this.ehsService.updateIncident(this.ehs).subscribe((ehs)=>{
           console.log(ehs);
         },(error)=>{
           console.log(error);
         });
       }

  // this.http.post(this.APP_URL+'ehs/save_ehs', JSON.stringify(data))
  //   .subscribe(res => {
  //          console.log('inside postmehtod of sub.function', res);//only objects
  //       })

  }

  @ViewChild('infoModal') public infoModal: ModalDirective;
}
