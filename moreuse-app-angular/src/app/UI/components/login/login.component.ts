import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/models/User/usecase/userusecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;

  public validationMessages = {
    email:[
      {type:'required', message:'Este campo es requerido'},
      {type:'email', message:'Este campo es de tipo email'}
    ],
    password:[
      {type:'required', message:'Este campo es requerido'},
      {type:'minlenght', message:'Este campo es de t8 caracteres'},
      {type:'pattern', message:'Este campo debe contener por lo menos 1 mayuscula, 1 minuscula y 1 número'}
    ]
  }

  constructor(private formBuilder: FormBuilder, private router:Router, private _userUseCase: Userusecase) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['email', [
        Validators.required,
        Validators.email
      ]
    ],
    password: ['password', [
      Validators.min(6),
      Validators.required
      // Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
    ]]
    })
  }

  login() {
    if (this.loginForm.valid) {
      var correo = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;

      this._userUseCase.login(correo, password).subscribe((response: any) => {
        if(response.token != '') {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/'])
        } else {
          alert('Usuario o contraseña incorrecta');
        }
    })
    }
  }

  public get campos() {
    return this.loginForm.controls
  }

}
