import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/models/User/usecase/userusecase';
import { User } from 'src/app/domain/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  public validationMessages = {
    name:[
      {type:'required', message:'Este campo es requerido'}
    ],
    email:[
      {type:'required', message:'Este campo es requerido'},
      {type:'email', message:'Este campo es de tipo email'}
    ],
    password:[
      {type:'required', message:'Este campo es requerido'},
      {type:'minlenght', message:'Este campo es de t8 caracteres'},
      {type:'pattern', message:'Este campo debe contener por lo menos 1 mayuscula, 1 minuscula y 1 número'}
    ],
    repeatPassword:[
      {type:'required', message:'Este campo es requerido'},
      {type:'minlenght', message:'Este campo es de t8 caracteres'},
      {type:'pattern', message:'Este campo debe contener por lo menos 1 mayuscula, 1 minuscula y 1 número'}
    ]
  }

  constructor(private formBuilder: FormBuilder, private router:Router, private _userUseCase: Userusecase) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]
    ],
      email: ['', [
        Validators.required,
        Validators.email
      ]
    ],
    password: ['', [
      Validators.min(8),
      Validators.required,
      Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
    ]
  ],
  repeatPassword: ['', [
      Validators.min(8),
      Validators.required,
      Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
    ]
  ],
  phone: [''],
  address: ['']
  })
  }

  register() {
    if (this.registerForm.valid) {
      var name = this.registerForm.controls['name'].value;
      var email = this.registerForm.controls['email'].value;
      var password = this.registerForm.controls['password'].value;
      var phone = this.registerForm.controls['phone'].value;
      var address = this.registerForm.controls['address'].value;

      var user = new User();
      user.name = name;
      user.email = email;
      user.password = password;
      user.phone = phone;
      user.address = address;

      this._userUseCase.register(user).subscribe((response: User) => {
        console.log(response);
        Swal.fire({
          title: 'Usuario creado',
          text: `El usuario ${response} ha sido creado correctamente`,
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        this.router.navigate(['/fullscreen/login']);
      });
    } else {
      alert('este form no es valido')
    }
  }

  public get campos() {
    return this.registerForm.controls
  }

}
