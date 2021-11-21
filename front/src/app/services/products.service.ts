import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Product {
  name: string,
  price: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000")
  }

  addToCart(name: string, price: string) {
    this.http.post("http://localhost:3000/cart",
      {name, price, quantity: 1},
      { headers: {
        "Content-Type": "application/json"
      }
    }).subscribe(() => {console.log("Success added!")}, (e) => {console.log("Error!", e)})
  }
}
