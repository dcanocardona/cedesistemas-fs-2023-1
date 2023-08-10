import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clothes } from 'src/app/domain/models/Clothes/clothes';
import { Clothesusecase } from 'src/app/domain/models/Clothes/usecase/clothesusecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,
    private clothesUseCase: Clothesusecase,
    private router:Router) { }
  clothes! : Clothes;

  ngOnInit(): void {
    this.getClothes();
    this.prueba();
  }

  name!: string

  prueba() {
    var token = localStorage.getItem('token')
    var headers;
    if (token){
      headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + token);
    }
    const options = {headers: headers};
    console.log('token: ', token);
    this.http.get('http://localhost:3000/auth/', options).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.name = resp.name;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
  }

  getClothes(){
    this.clothesUseCase.getclothes().subscribe((data: Clothes) => {
      this.clothes = data;
      console.log(this.clothes);
    })
  }

  getClotheDetail(id: any){
    console.log('llamo al clothe detail component')
    this.router.navigate(['/default/clothedetail/', id]);
  }

}
