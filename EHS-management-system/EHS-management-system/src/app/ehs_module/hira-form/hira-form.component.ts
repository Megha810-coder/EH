import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ehs } from '../../ehs';
import { EhsService } from '../../ehs.service';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-hira-form',
  templateUrl: './hira-form.component.html',
  styleUrls: ['./hira-form.component.scss']
})
export class HiraFormComponent implements OnInit {


  public ehs:Ehs;

  constructor(private http: HttpClient,private ehsService: EhsService) { }

  readonly APP_URL = 'http://localhost:8082/ERP-Company/';

  ngOnInit() {
    this.ehs = this.ehsService.getter();
  }
 
onClickSubmit() {
  if(this.ehs.hira_id==undefined){
    this.ehsService.createHira(this.ehs).subscribe((ehs)=>{
      console.log(ehs);
    },(error)=>{
      console.log(error);
    });
//  console.log(data);
//   this.http.post(this.APP_URL+'ehs/save_hira', JSON.stringify(data))
//     .subscribe(res => {
//            console.log('inside postmehtod of sub.function', res);//only objects
//         })
}
 else{
   this.ehsService.updateHira(this.ehs).subscribe((user)=>{
     console.log(user);
   },(error)=>{
    console.log(error);
   });
 }



  }


   @ViewChild('infoModal') public infoModal: ModalDirective;
}
