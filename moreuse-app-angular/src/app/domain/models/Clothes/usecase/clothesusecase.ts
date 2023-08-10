import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Clothe, Clothes } from "../clothes";
import { ClothesGateway } from "../gateway/clothesgateway";

@Injectable({
  providedIn:'root'
})

export class Clothesusecase {
  constructor(private _clothesGateway: ClothesGateway) {}
  getclothes(): Observable<Clothes> {
    //logica de la app
    return this._clothesGateway.getClothes();
  }

  getClotheDetail(id: string): Observable<Clothe> {
    return this._clothesGateway.getClotheDetail(id);
  }
}
