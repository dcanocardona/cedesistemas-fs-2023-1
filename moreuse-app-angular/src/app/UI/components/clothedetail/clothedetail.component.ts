import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clothe } from 'src/app/domain/models/Clothes/clothes';
import { Clothesusecase } from 'src/app/domain/models/Clothes/usecase/clothesusecase';

@Component({
  selector: 'app-clothedetail',
  templateUrl: './clothedetail.component.html',
  styleUrls: ['./clothedetail.component.css']
})
export class ClothedetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private _clotheUseCase: Clothesusecase) { }
  clothe!: Clothe;
  id!: string;
  ngOnInit(): void {
    console.log('entro al clothe detail component');
    var id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProductDetail(id);
    }
  }

  getProductDetail(id: string) {
    this._clotheUseCase.getClotheDetail(id).subscribe((data: Clothe) => {
      this.clothe = data
      console.log(this.clothe);
    })
  }


}
