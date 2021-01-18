import { Component, OnInit } from '@angular/core';
import { EhsService } from '../../ehs.service';
import { Ehs } from '../../ehs';

@Component({
  selector: 'app-hira-view',
  templateUrl: './hira-view.component.html',
  styleUrls: ['./hira-view.component.scss']
})
export class HiraViewComponent implements OnInit {


  public ehs:Ehs;
  constructor(private ehsService: EhsService) { }

  ngOnInit() {
    this.ehs = this.ehsService.getter();

  }

}
