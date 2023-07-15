import { Observable } from "rxjs";
import { Token } from "../../token";
import { User } from "../../user";

export abstract class Usergateway {
  abstract login(email: string, passwrod: string): Observable<Token>
  abstract register(user: User): Observable<User>
}
