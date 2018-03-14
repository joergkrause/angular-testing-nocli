import { Injectable } from  '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: HttpClient){}

  public getUsers(): Observable<Array<string>> {
    return this.http.get<Array<string>>('/data/user.json');
  }

  public getUser(id: number):  void {
    // TODO: add logic
  }

}