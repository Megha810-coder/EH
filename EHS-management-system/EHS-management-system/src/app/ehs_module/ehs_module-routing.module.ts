import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ MailComponent } from './mail/mail.component';
import { OccupationalComponent } from './occupational/occupational.component';
import { OccupationalFormComponent } from './occupational-form/occupational-form.component';
import {FactoryActComponent } from './factory-act/factory-act.component';
import { IndustrialComponent } from './industrial/industrial.component';
import {IndustrialFormComponent} from './industrial-form/industrial-form.component';
import { IndustrialActComponent } from './industrial-act/industrial-act.component';
import { IncidentComponent } from './incident/incident.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { ProductComponent } from './product/product.component';
import {ProductFormComponent } from './product-form/product-form.component';
import { WasteMngtComponent } from './waste-mngt/waste-mngt.component';
import { WasteFormComponent } from './waste-form/waste-form.component';
import { HazardousMngtComponent } from './hazardous-mngt/hazardous-mngt.component';
import { HazardousFormComponent} from './hazardous-form/hazardous-form.component';
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


export const routes: Routes = [
    {
    path: '',
    data: {
      title: 'ehs_module'
    },
    children: [
     {
         path:'',
         redirectTo:' '
     },
      {
        path: 'Occupational',
        component: OccupationalComponent,
        data: {
          title: 'Occupational'
        }
      },
      {
        path: 'Hira',
        component: HiraComponent,
        data: {
          title: 'Hira'
        }
      },
      {
        path: 'Why',
        component: WhyComponent,
        data: {
          title: 'Why'
        }
      },
      {
        path: 'hira-form',
        component: HiraFormComponent,
        data: {
          title: 'hira-form'
        }
      },
      {
        path: 'why-form',
        component: WhyFormComponent,
        data: {
          title: 'why-form'
        }
      },

      {
        path: 'Industrial',
        component: IndustrialComponent,
        data: {
          title: 'Industrial'
        }
      },

      {
        path: 'Incident',
        component: IncidentComponent,
        data: {
          title: 'Incident'
        }
      },

      {
        path: 'IncidentForm',
        component: IncidentFormComponent,
        data: {
          title: 'Incident'
        }
      },

      {
        path: 'Product',
        component: ProductComponent,
        data: {
          title: 'Product'
        }
      },

      {
        path: 'Waste',
        component: WasteMngtComponent,
        data: {
          title: 'Waste'
        }
      },
      
      {
        path: 'Hazardous',
        component: HazardousMngtComponent,
        data: {
          title: 'Hazardous'
        }
      },
      {
        path: 'HazardousForm',
        component: HazardousFormComponent,
        data: {
          title: 'HazardousForm'
        }
      },
      {
        path: 'Report',
        component: ReportComponent,
        data: {
          title: 'Report'
        }
      },
      
    ]
  },
  {
    path: 'Form',
    component: OccupationalFormComponent,
    data: {
      title: 'From'
    }
  },
  {
    path: 'Mail',
    component: MailComponent,
    data: {
      title: 'Mail'
    }
  },
  {
    path: 'Factory',
    component: FactoryActComponent,
    data: {
      title: 'Factory'
    }
  },
  {
    path: 'Add',
    component: IndustrialFormComponent,
    data: {
      title: 'Add'
    }
  },
  {
    path: 'Act',
    component: IndustrialActComponent,
    data: {
      title: 'Act'
    }
  },
  {
    path: 'Create',
    component: IncidentFormComponent,
    data: {
      title: 'Create'
    }
  },
  {
    path: 'NewProduct',
    component: ProductFormComponent,
    data: {
      title: 'NewProduct'
    }
  },
  {
    path: 'NewWaste',
    component: WasteFormComponent,
    data: {
      title: 'NewWaste'
    }
  },
  {
    path: 'NewHazardous',
    component: HazardousFormComponent,
    data: {
      title: 'NewHazardous'
    }
  },
  {
    path: 'Back',
    component: BackComponent,
    data: {
      title: 'Back'
    }
  },
  {
    path: 'view_hazard',
    component: HazardViewComponent,
    data: {
      title: 'view_hazard'
    }
  },
  {
    path: 'view_hira',
    component: HiraViewComponent,
    data: {
      title: 'view_hira'
    }
  },
  {
    path: 'view_waste',
    component: WasteViewComponent,
    data: {
      title: 'view_waste'
    }
  },
  {
    path: 'view_indust',
    component: ViewIndustComponent,
    data: {
      title: 'view_indust'
    }
  },
  {
    path: 'view_incident',
    component: ViewIncidentComponent,
    data: {
      title: 'view_incident'
    }
  },
 


  
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
export class NehaRoutingModule {}
  