import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmitterService } from '../../services/emitter.service';
import * as Actions from  '../../configurations/service.actions';

interface Tab {
  title: string;
  path: string;
}

@Component({
  selector: 'site-root',
  templateUrl: './site-root.component.html'
})
export class SiteRoot implements OnInit {
  current: string;

  tabsMenu: Array<Tab>;

  constructor(private router: Router) {
    this.tabsMenu = new Array<Tab>();
  }

  ngOnInit(): void {
    this.router
    .config
    .filter(route => route.path)
    .forEach(r => this.tabsMenu.push({ title: r.data['title'], path: r.path }));
  }

}