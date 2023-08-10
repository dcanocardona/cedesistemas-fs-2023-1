import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { Token } from 'src/app/domain/models/token';
import { User } from 'src/app/domain/models/user';
import { GenericService } from '../helpers/generic.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoreuseUserService extends Usergateway {

  private _url = environment.urlService;
  constructor(private genericService: GenericService) {
    super();
  }

  login(email: string, password: string): Observable<Token> {
    return this.genericService.post(this._url,'/auth/login', { email, password })
  }

  register(user: User): Observable<User> {
    return this.genericService.post(this._url,'/auth/signup', { user })
  }
}
