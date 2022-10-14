import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {SharedModule} from "../shared/shared.module";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexModule
  ]
})
export class AuthModule { }
