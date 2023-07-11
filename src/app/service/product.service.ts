import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';
import products from '../../assets/db.json';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllProducts(): Product[] {
    const products$: Product[] = products;
    return products$;
  }
  getOneProduct(id: number): Product | null {
    for (let key in products) {
      if (products[key].id == id) {
        const product$: Product = products[key];
        return product$;
      }
    }
    return null;
  }
}
