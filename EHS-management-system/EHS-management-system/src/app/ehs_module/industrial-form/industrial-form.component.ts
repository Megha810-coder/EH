import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EhsService } from '../../ehs.service';
import { Ehs } from '../../ehs';
import {ModalDirective} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-industrial-form',
  templateUrl: './industrial-form.component.html',
  styleUrls: ['./industrial-form.component.scss']
})
export class IndustrialFormComponent implements OnInit {

  constructor(private http: HttpClient,private ehsService: EhsService) { }

  public ehs:Ehs;

  readonly APP_URL = 'http://localhost:8082/ERP-Company/'; 
  ngOnInit() {

    this.ehs = this.ehsService.getter();
  }
 
onClickSubmit() {
//  console.log(data);
//   this.http.post(this.APP_URL+'ehs/save_industrial', JSON.stringify(data))
//     .subscribe(res => {
//            console.log('inside postmehtod of sub.function', res);//only objects
//         })
if(this.ehs.industrial_id==undefined){
  this.ehsService.createIndust(this.ehs).subscribe((ehs)=>{
    console.log(ehs);
  },(error)=>{
    console.log(error);
  });
}
else{
 this.ehsService.updateIndust(this.ehs).subscribe((user)=>{
   console.log(user);
 },(error)=>{
  console.log(error);
 });
}

  }
  @ViewChild('infoModal') public infoModal: ModalDirective;

}
