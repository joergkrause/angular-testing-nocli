import { Routes } from '@angular/router';

import * as cmp from '../components/index';

export const routesConfig: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: cmp.SiteHomeComponent,
    data: { title: 'Startseite' }
  },
  {
    path: 'data',
    component: cmp.SiteDataComponent,
    data: { title: 'Benutzerdaten' }
  }
  // {
  //   path: 'data/:id',
  //   component: cmp.SiteDataComponent,
  //   data: { title: 'Benutzer' }
  // }
]

// Alternative:
// export default routesConfig;