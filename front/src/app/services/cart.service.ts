import { Injectable } from '@angular/core';

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

  constructor() { }

  async loadProductsCart(): Promise<CartProduct[]> {
    const response: Response = await fetch("http://localhost:3000/cart");
    return await response.json();
  }

  async deleteProduct(name: string): Promise<CartProduct[]> {
    const response = await fetch("http://localhost:3000/cart", {
      method: "DELETE", body: JSON.stringify({name}), headers: {
        "Content-Type": "application/json"
      }
    });
      return response.json();
  }

  async changeQuantity(name: string, action: ChangeCountActions): Promise<CartProduct[]> {
    const response = await fetch("http://localhost:3000/cart", {
      method: "PATCH", body: JSON.stringify({name, action}), headers: {
        "Content-Type": "application/json"
      }
    });
    return response.json();

  }
}
