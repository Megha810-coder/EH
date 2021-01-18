import { Component, OnInit } from '@angular/core';
import { EhsService } from '../../ehs.service';
import { Ehs } from '../../ehs';

@Component({
  selector: 'app-view-incident',
  templateUrl: './view-incident.component.html',
  styleUrls: ['./view-incident.component.scss']
})
export class ViewIncidentComponent implements OnInit {

  public ehs:Ehs;
  constructor(private ehsService: EhsService) { }

  ngOnInit() {
    this.ehs = this.ehsService.getter();

  }

}
