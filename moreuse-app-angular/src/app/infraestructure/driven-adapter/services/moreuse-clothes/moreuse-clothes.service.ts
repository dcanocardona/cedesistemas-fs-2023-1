import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../helpers/generic.service';
import { Clothe, Clothes } from 'src/app/domain/models/Clothes/clothes';
import { environment } from 'src/environments/environment';
import { ClothesGateway } from 'src/app/domain/models/Clothes/gateway/clothesgateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoreuseClothesService extends ClothesGateway{

  private _url = environment.urlService;
  constructor(private genericService:GenericService) {
    super();
  }

  getClothes(): Observable<Clothes>{
    return this.genericService.get<Clothes>(this._url,'clothes');
  }

  getClotheDetail(id: string): Observable<Clothe> {
    return this.genericService.get<Clothe>(this._url,'clothes/detail/',id)
  }
}
