import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CartProduct, Product} from "../models/product.model";
import {CartService} from "./cart.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private cartService: CartService) {
  }

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("/api")
  }

  addToCart(name: string, price: string): void {
    this.http.post<CartProduct[]>("/api/cart",
      {name, price, quantity: 1},
      { headers: {
        "Content-Type": "application/json"
      }
    }).subscribe((data) => {
      console.log("Success added!");
      this.cartService.toCountProducts(data);
    }, (e) => {console.log("Error!", e)})
  }

  searchProduct(search: string) {
    return this.http.get<Product[]>("/api/catalog", {
      params: {
        search
      }
    });
  }

  detailsProduct(item: string) {
    return this.http.get<Product[]>("/catalog/product", {
      params: {
        item
      }
    });
  }
}
