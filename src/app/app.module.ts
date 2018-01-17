import { NgModule, enableProdMode } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import * as cmp from './components/index';
import { routesConfig } from './configurations/router.config';

import { WidgetsModule } from './widgets/widgets.module';
import { SiteHomeComponent } from './components/site-home/site-home.component';

import { UserService } from './services/user.service';
import { SiteTestComponent } from './components/site-test/site-test.component';

const locStrat = { provide: LocationStrategy, useClass: HashLocationStrategy };

@NgModule({
  declarations: [cmp.SiteRoot, cmp.SiteDataComponent, SiteHomeComponent, SiteTestComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routesConfig), WidgetsModule],
  providers: [locStrat, UserService],
  bootstrap: [cmp.SiteRoot]
})
export class AppModule {

}

