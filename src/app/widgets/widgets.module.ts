import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [TabComponent, TabsComponent],
  exports: [TabComponent, TabsComponent]
})
export class WidgetsModule { }
