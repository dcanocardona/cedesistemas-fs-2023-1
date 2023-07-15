import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { Token } from 'src/app/domain/models/token';
import { User } from 'src/app/domain/models/user';

@Injectable({
  providedIn: 'root'
})
export class MoreuseUserService extends Usergateway {

  constructor(private http: HttpClient) {
    super();
  }

  login(email: string, password: string): Observable<Token> {
    return this.http.post('http://localhost:3000/auth/login', { email: email, password: password })
  }

  register(user: User): Observable<any> {
    return this.http.post('http://localhost:3000/auth/signup', { name: user.name, email: user.email, password: user.password, phone: user.phone, addresss: user.address })
  }
}
