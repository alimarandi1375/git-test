import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {BlogPageComponent} from "./blog/blog-page/blog-page.component";

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'auth' , component: LoginComponent},
  {path: 'blog' , component: BlogPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
