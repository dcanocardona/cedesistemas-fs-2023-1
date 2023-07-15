import { Injectable } from "@angular/core";
import { Usergateway } from "../gateway/usergateway";
import { Observable } from "rxjs";
import { Token } from "../../token";
import { User } from "../../user";

@Injectable({
  providedIn: "root"
})

export class Userusecase {
  constructor(private _usergateway: Usergateway) { }
  login(email: string, password: string): any {
    // aqui aplico logica de negocio
    return this._usergateway.login(email, password);
  }

  register(user: User): any {
    return this._usergateway.register(user);
  }
}
