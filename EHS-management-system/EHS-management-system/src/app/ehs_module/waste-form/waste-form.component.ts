import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EhsService } from '../../ehs.service';
import { Ehs } from '../../ehs';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-waste-form',
  templateUrl: './waste-form.component.html',
  styleUrls: ['./waste-form.component.scss']
})
export class WasteFormComponent implements OnInit {

  public ehs:Ehs;
  
  constructor(private http: HttpClient,private ehsService: EhsService) { }

  readonly APP_URL = 'http://localhost:8082/ERP-Company/'; 

  ngOnInit() {
    this.ehs = this.ehsService.getter();
  }
 
onClickSubmit() {
//  console.log(data);
//   this.http.post(this.APP_URL+'ehs/save_waste', JSON.stringify(data))
//     .subscribe(res => {
//            console.log('inside postmehtod of sub.function', res);//only objects
//         })
        if(this.ehs.waste_id==undefined){
          this.ehsService.createWaste(this.ehs).subscribe((ehs)=>{
            console.log(ehs);
          },(error)=>{
            console.log(error);
          });
  
      }
       else{
         this.ehsService.updateWaste(this.ehs).subscribe((user)=>{
           console.log(user);
         },(error)=>{
          console.log(error);
         });
       }
}

@ViewChild('infoModal') public infoModal: ModalDirective;
}
