import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { MapComponent } from './map/map.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    MapComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
