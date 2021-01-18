import { Component, OnInit } from '@angular/core';
import { EhsService } from '../../ehs.service';
import { Ehs } from '../../ehs';

@Component({
  selector: 'app-waste-view',
  templateUrl: './waste-view.component.html',
  styleUrls: ['./waste-view.component.scss']
})
export class WasteViewComponent implements OnInit {


  public ehs:Ehs;
  constructor(private ehsService: EhsService) { }

  ngOnInit() {
    this.ehs = this.ehsService.getter();
  }

}
