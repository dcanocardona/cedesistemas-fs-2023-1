import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../components/home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ContactusComponent } from '../../components/contactus/contactus.component';
import { ClothedetailComponent } from '../../components/clothedetail/clothedetail.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContactusComponent,
    ClothedetailComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class DefaultModule { }
