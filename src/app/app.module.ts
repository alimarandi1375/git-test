import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FlexLayoutModule} from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';
import {AuthModule} from "./auth/auth.module";
import {BlogModule} from "./blog/blog.module";
import {ProductsModule} from "./products/products.module";
import {SharedModule} from "./shared/shared.module";
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    SwiperModule,
    AuthModule,
    BlogModule,
    ProductsModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
