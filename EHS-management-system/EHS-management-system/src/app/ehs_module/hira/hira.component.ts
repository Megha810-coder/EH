import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EhsService } from '../../ehs.service';
import { Ehs } from '../../ehs';

@Component({
  selector: 'app-hira',
  templateUrl: './hira.component.html',
  styleUrls: ['./hira.component.scss']
})
export class HiraComponent implements OnInit {

  myresponse: any;
  count :Number ;
  public user:Ehs[];
  constructor(private router: Router,private _http: HttpClient,private ehsService: EhsService) { }

  readonly APP_URL = 'http://localhost:8082/ERP-Company/'; 


 
  ngOnInit() {
    this._http.get(this.APP_URL + 'ehs/mng_hira').subscribe(
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

  updateHira(ehs){
    this.ehsService.setter(ehs);
    this.router.navigate(['/ehs_module/hira-form']);
  }
  
  save()
  {
    let ehs =new Ehs();
    this.ehsService.setter(ehs);
    this.router.navigate(['/ehs_module/hira-form']);
  }

  viewHira(ehs){
    this.ehsService.setter(ehs);
    this.router.navigate(['/ehs_module/view_hira']);
  }

  deleteHira(id)
  {
    this._http.get(this.APP_URL + 'ehs/delete_hira?hira_id='+id).subscribe(
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

