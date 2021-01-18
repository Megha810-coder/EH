import { Component, OnInit } from '@angular/core';
import { EhsService } from '../../ehs.service';
import { Ehs } from '../../ehs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hazard-view',
  templateUrl: './hazard-view.component.html',
  styleUrls: ['./hazard-view.component.scss']
})
export class HazardViewComponent implements OnInit {

  public ehs:Ehs;
  myresponse:any;
  myresponse_3:any;
  myresponse_2:any;
  readonly APP_URL = 'http://localhost:8082/ERP-Company/'; 
  constructor(private ehsService: EhsService,private _http: HttpClient) { }

  ngOnInit() {
    this.ehs = this.ehsService.getter();
  }
  

}
