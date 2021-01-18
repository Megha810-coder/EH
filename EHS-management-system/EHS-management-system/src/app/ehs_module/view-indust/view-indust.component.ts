import { Component, OnInit } from '@angular/core';
import { EhsService } from '../../ehs.service';
import { Ehs } from '../../ehs';

@Component({
  selector: 'app-view-indust',
  templateUrl: './view-indust.component.html',
  styleUrls: ['./view-indust.component.scss']
})
export class ViewIndustComponent implements OnInit {

 
  public ehs:Ehs;
  constructor(private ehsService: EhsService) { }

  ngOnInit() {
    this.ehs = this.ehsService.getter();
  }
}
