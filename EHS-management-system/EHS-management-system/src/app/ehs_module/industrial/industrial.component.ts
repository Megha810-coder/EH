import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EhsService } from '../../ehs.service';
import { Ehs } from '../../ehs';

@Component({
  selector: 'app-industrial',
  templateUrl: './industrial.component.html',
  styleUrls: ['./industrial.component.scss']
})
export class IndustrialComponent implements OnInit {myresponse: any;


  public user:Ehs[];

  constructor(private router: Router,private _http: HttpClient,private ehsService: EhsService) {
 
   }
   readonly APP_URL = 'http://localhost:8082/ERP-Company/';  

  ngOnInit(): void {
    this._http.get(this.APP_URL + 'ehs/mng_industrial').subscribe(
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

  updateIndust(ehs){
    this.ehsService.setter(ehs);
    this.router.navigate(['/ehs_module/Add']);
  }
  
  save()
  {
    let ehs =new Ehs();
    this.ehsService.setter(ehs);
    this.router.navigate(['/ehs_module/Add']);
  }

  viewIndust(ehs){
    this.ehsService.setter(ehs);
    this.router.navigate(['/ehs_module/view_indust']);
  }

  deleteIndust(ehs){
    this.ehsService.deleteUser(ehs.industrial_id).subscribe((data)=>{
      this.user.splice(this.user.indexOf(ehs),1);
    },(error)=>{
      console.log(error);
    })

  }

}
