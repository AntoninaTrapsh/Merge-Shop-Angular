import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CartProduct, ChangeCountActions, Product} from "../models/product.model";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private countProduct$: Subject<number> = new Subject();
  private cartContain$: ReplaySubject<CartProduct[]> = new ReplaySubject(1);

  constructor(private http: HttpClient) {
  }

  getCountProduct(): Subject<number> {
    return this.countProduct$;
  }

  getProductCart(): ReplaySubject<CartProduct[]> {
    return this.cartContain$;
  }

  toCountProducts(products: CartProduct[]): void {
    let quantity = 0;
    for (let product of products) {
      quantity += product.quantity;
    }
    this.countProduct$.next(quantity);
  }

  loadProductCart(): void {
    this.http.get<CartProduct[]>("/api/cart").subscribe((data) => {
      this.toCountProducts(data);
      this.cartContain$.next(data);
    });
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
