import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
    declarations: [
        BlogListComponent,
        BlogPageComponent
    ],
    exports: [
        BlogListComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule
    ]
})
export class BlogModule { }
