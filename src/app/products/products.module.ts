import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";




@NgModule({
    declarations: [
        ProductsListComponent,

    ],
    exports: [
        ProductsListComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        NgbModule,
    ]
})
export class ProductsModule { }
