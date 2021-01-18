interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  // {
  //   name: 'Recrutment',
  //   url: '/Recrutment',
  //   icon: 'icon-speedometer',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
  name: 'EHS Management System',
  url: '/ehs_module',
  icon: 'icon-list',
  children: [

    {
      name: 'Incident And Accident Management',
      icon: 'icon-note',
      url: '/ehs_module/Incident',
      
    },
    {
      name: 'Hazard Identification and Risk Analysis  ',
      icon: 'icon-note',
      url: '/ehs_module/Hira',
      
    },
    {
      name: 'Hazardous Material Management',
      icon: 'icon-note',
      url: '/ehs_module/Hazardous',
      
    },
    // {
    //   name: 'Product Management',
    //   icon: 'icon-note',
    //   url: '/ehs_module/Product',
      
    //  },
    {
      name: 'Waste Management',
      icon: 'icon-note',
      url: '/ehs_module/Waste',
      
    },
    //  {
    //    name: 'Occupational Safety Training',
    //    icon: 'icon-note',
    //    url: '/ehs_module/Occupational',
      
    //  },
   
    {
      name: 'Industrial Hygine And Safety',
      icon: 'icon-note',
      url: '/ehs_module/Industrial',
      
    },
    {
      name: 'Work Permit ',
      icon: 'icon-note',
      url: '/ehs_module/Why',
      
    },
    {
      name: 'EHS Report and Analysis ',
      icon: 'icon-note',
      url: '/ehs_module/Report',
      
    },
    
    
   
  ]
},

  
  



];
