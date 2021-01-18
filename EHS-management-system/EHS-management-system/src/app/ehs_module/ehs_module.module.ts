import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NehaRoutingModule } from './ehs_module-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MailComponent } from './mail/mail.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AvatarModule } from 'ngx-avatar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpModule } from '@angular/http';

import {NgxPrintModule} from 'ngx-print';
import { OccupationalComponent } from './occupational/occupational.component';
import { OccupationalFormComponent } from './occupational-form/occupational-form.component';
import { FactoryActComponent } from './factory-act/factory-act.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { IndustrialFormComponent } from './industrial-form/industrial-form.component';
import { IndustrialActComponent } from './industrial-act/industrial-act.component';
import { IncidentComponent } from './incident/incident.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { WasteMngtComponent } from './waste-mngt/waste-mngt.component';
import { WasteFormComponent } from './waste-form/waste-form.component';
import { HazardousMngtComponent } from './hazardous-mngt/hazardous-mngt.component';
import { HazardousFormComponent } from './hazardous-form/hazardous-form.component';
import { HiraComponent } from './hira/hira.component';
import { HiraFormComponent } from './hira-form/hira-form.component';
import { WhyFormComponent } from './why-form/why-form.component';
import { WhyComponent } from './why/why.component';
import { BackComponent } from './back/back.component';
import { ReportComponent } from './report/report.component';
import { HazardViewComponent } from './hazard-view/hazard-view.component';
import { HiraViewComponent } from './hira-view/hira-view.component';
import { WasteViewComponent } from './waste-view/waste-view.component';
import { ViewIndustComponent } from './view-indust/view-indust.component';
import { ViewIncidentComponent } from './view-incident/view-incident.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [ MailComponent,  OccupationalComponent, OccupationalFormComponent, FactoryActComponent, IndustrialComponent, IndustrialFormComponent, IndustrialActComponent, IncidentComponent, IncidentFormComponent, ProductComponent, ProductFormComponent, WasteMngtComponent, WasteFormComponent, HazardousMngtComponent, HazardousFormComponent, HiraComponent, HiraFormComponent, WhyFormComponent, WhyComponent, BackComponent, ReportComponent, HazardViewComponent, HiraViewComponent, WasteViewComponent, ViewIndustComponent, ViewIncidentComponent],
  exports:[],
  imports: [
    CommonModule,NehaRoutingModule,BsDropdownModule,AvatarModule,FileUploadModule,HttpModule,NgxPrintModule,TabsModule,DatePickerModule, FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class Ehs_moduleModule { }
