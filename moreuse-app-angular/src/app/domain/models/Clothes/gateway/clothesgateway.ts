import { Observable } from "rxjs";
import { Clothe, Clothes } from "../clothes";

export abstract class ClothesGateway {
  abstract getClothes() : Observable<Clothes>
  abstract getClotheDetail(id: string) : Observable<Clothe>
}


