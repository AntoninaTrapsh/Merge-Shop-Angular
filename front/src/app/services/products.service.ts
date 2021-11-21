import { Injectable } from '@angular/core';

interface Product {
  name: string,
  price: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  async loadProducts(): Promise<Product[]> {
    const response: Response = await fetch("http://localhost:3000");
    return await response.json();
  }

  async addToCart(name: string, price: string) {
    await fetch("http://localhost:3000/cart", {
      method: "POST", body: JSON.stringify({name, price, quantity: 1}), headers: {
        "Content-Type": "application/json"
      }
    })
  }

}
