import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface CartProduct {
  name: string,
  price: number,
  quantity: number
}

enum ChangeCountActions {
  INCREASE = "increase",
  DECREASE = "decrease"
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  loadProductCart(): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>("http://localhost:3000/cart");
  }

  deleteProduct(name: string) {
    return this.http.delete<CartProduct[]>("http://localhost:3000/cart", {
      body: {name}, headers: {
        "Content-Type": "application/json"
      }
    })
  }

  changeQuantity(name: string, action: ChangeCountActions) {
    return this.http.patch<CartProduct[]>("http://localhost:3000/cart",
      {name, action},
      {
        headers: {
          "Content-Type": "application/json"
        }
      });
  }
}
