"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cmp = require("../components/index");
exports.routesConfig = [
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
];
// Alternative:
// export default routesConfig; 
