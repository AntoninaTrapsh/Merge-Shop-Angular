import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("/api")
  }

  addToCart(name: string, price: string): void {
    this.http.post("/api/cart",
      {name, price, quantity: 1},
      { headers: {
        "Content-Type": "application/json"
      }
    }).subscribe(() => {console.log("Success added!")}, (e) => {console.log("Error!", e)})
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
