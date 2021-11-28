import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CartProduct, ChangeCountActions} from "../models/product.model";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  loadProductCart(): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>("/api/cart");
  }

  deleteProduct(name: string): Observable<CartProduct[]> {
    return this.http.delete<CartProduct[]>("/api/cart", {
      body: {name}, headers: {
        "Content-Type": "application/json"
      }
    })
  }

  changeQuantity(name: string, action: ChangeCountActions): Observable<CartProduct[]> {
    return this.http.patch<CartProduct[]>("/api/cart",
      {name, action},
      {
        headers: {
          "Content-Type": "application/json"
        }
      });
  }
}
