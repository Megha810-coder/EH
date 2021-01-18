import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  myresponse: any;
  http: any;
  constructor(private router: Router,private _http: HttpClient) { }
  readonly APP_URL = 'http://localhost:8082/ERP-Company/';
  loading = false;
  buttionText = "Submit";
  element: HTMLElement;
  logo:any;
  selectedFiles: FileList;
  fileName: string;
  
 
  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles[0].name;
    console.log('selectedFiles: ' + this.fileName) ;
    alert(this.fileName);
  }

  
  mail(data) {
    var urlName="C:/Users/Hp/Documents/Received Files/erp_lcm/erp_lcm/src/main/webapp/resources/cd_img/" + this.fileName;
    var upload={"to":data.to, "gmailuser":data.gmailuser,"gmailpass":data.gmailpass,"subject":data.subject,"message":data.message,"file":urlName}
    this._http.post(this.APP_URL +'mail/maill', JSON.stringify(upload))
      .subscribe(res => {
             console.log('inside postmehtod of sub.function', res);//only objects
          })
      
  }

  ngOnInit() {
  }
  
  @ViewChild('infoModal') public infoModal: ModalDirective;
 
}
