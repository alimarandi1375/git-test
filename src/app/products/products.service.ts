import { Injectable } from '@angular/core';
import {Products, productsApi} from "../shared/data/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products : Products[]

  constructor() {
    this.products = productsApi.products
  }
}
