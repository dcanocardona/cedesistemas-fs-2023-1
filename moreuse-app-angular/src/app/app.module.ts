import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './UI/layouts/default/default.module';
import { SharedModule } from './UI/shared/shared.module';
import { FullscreenModule } from './UI/layouts/fullscreen/fullscreen.module';
import { Usergateway } from './domain/models/User/gateway/usergateway';
import { Userusecase } from './domain/models/User/usecase/userusecase';
import { MoreuseUserService } from './infraestructure/driven-adapter/services/moreuse-user/moreuse-user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullscreenModule,
    SharedModule
  ],
  providers: [{provide: Usergateway, useClass: MoreuseUserService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
