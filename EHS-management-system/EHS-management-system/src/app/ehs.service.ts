import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Ehs } from './ehs';
@Injectable({
  providedIn: 'root'
})
export class EhsService {
  private baseUrl:String="http://digitegritytechnologies.com/erp/WEB-INF/classes/com/spcl/erp/controllers/";
  // private headers = new Headers({'Content-Type':'application/json; charset=utf8'});
  // private options = new RequestOptions({headers:this.headers});
  public ehs :Ehs;

  constructor(private _http:Http) { }

  createIncident(ehs:Ehs){
    return this._http.post(this.baseUrl+'ehs/save_ehs',JSON.stringify(ehs)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateIncident(ehs:Ehs){
    return this._http.post(this.baseUrl+'ehs/update_ehs1',JSON.stringify(ehs)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createHazardous(ehs:Ehs){
    return this._http.post(this.baseUrl+'ehs/save_hazardous',JSON.stringify(ehs)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getUsers(){
    return this._http.get(this.baseUrl+'labour/mng_prerequisite').map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateHazardous(ehs:Ehs){
    return this._http.post(this.baseUrl+'ehs/update_hazardous',JSON.stringify(ehs)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createHira(ehs:Ehs){
    return this._http.post(this.baseUrl+'ehs/save_hira',JSON.stringify(ehs)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateHira(ehs:Ehs){
    return this._http.post(this.baseUrl+'ehs/update_hira',JSON.stringify(ehs)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createWaste(ehs:Ehs){
    return this._http.post(this.baseUrl+'ehs/save_waste',JSON.stringify(ehs)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateWaste(ehs:Ehs){
    return this._http.post(this.baseUrl+'ehs/update_waste',JSON.stringify(ehs)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createIndust(ehs:Ehs){
    return this._http.post(this.baseUrl+'ehs/save_industrial',JSON.stringify(ehs)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateIndust(ehs:Ehs){
    return this._http.post(this.baseUrl+'ehs/update_industrial',JSON.stringify(ehs)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

 
  deleteUser(id:Number){
    return this._http.delete(this.baseUrl+'/delete/'+id).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }



  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }

  setter(ehs:Ehs){
    this.ehs=ehs;
  }


  getter(){
    return this.ehs;
  }
}
