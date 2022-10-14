import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  constructor(public productsService : ProductsService) { }

  ngOnInit(): void {
  }

  sliceText(text:string):string{
    if (text.length > 22)
    {
      return text.slice(0,22) + ' ...'
    }
    else {
      return text
    }
  }

  showSliceText(text:string , el:HTMLHeadElement){
    el.innerHTML = this.sliceText(text)
  }
  fullText(text:string , el:HTMLHeadElement){
    el.innerHTML = `<span>${text}</span>`
  }


}
