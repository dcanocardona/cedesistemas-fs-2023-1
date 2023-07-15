import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
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

}
