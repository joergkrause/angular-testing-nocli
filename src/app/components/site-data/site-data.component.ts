import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EmitterService } from '../../services/emitter.service';
import * as Actions from  '../../configurations/service.actions';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'site-data',
  templateUrl: './site-data.component.html',
  styleUrls: ['./site-data.component.css']
})
export class SiteDataComponent implements OnInit {

  values: Array<string>;

  constructor(private userService: UserService) {
   }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.values = data);
  }

  select(item: string){
    EmitterService.get(Actions.CURRENT_USER).emit(item);
  }

  showInput(value: string){
    EmitterService.get(Actions.CURRENT_USER).emit(value);
  }

}
