import {Component, OnInit, Output, EventEmitter} from '@angular/core';

interface CartProduct {
  name: string,
  price: number,
  quantity: number
}

enum ChangeCountActions {
  INCREASE = "increase",
  DECREASE = "decrease"
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output() deleteCart = new EventEmitter<void>();
  public productItems: CartProduct[] = [];
  public Actions = ChangeCountActions

  constructor() {
  }

  ngOnInit(): void {
    this.loadProductsCart().then((data) => {
      this.productItems = data
    }).catch((e) => console.log(e))
  }

  async loadProductsCart(): Promise<CartProduct[]> {
    const response: Response = await fetch("http://localhost:3000/cart");
    return await response.json();
  }

  deleteProduct(name: string): void {
    fetch("http://localhost:3000/cart", {
      method: "DELETE", body: JSON.stringify({name}), headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json())
      .then((data: CartProduct[]) => {
        this.productItems = data
      })
      .catch((e) => console.log(e))
  }

  changeQuantity(name: string, action: ChangeCountActions): void {
    fetch("http://localhost:3000/cart", {
      method: "PATCH", body: JSON.stringify({name, action}), headers: {
        "Content-Type": "application/json"
      }
    }).then((response: Response)=>response.json())
      .then((data: CartProduct[]) => this.productItems = data)
      .catch((e)=>console.log(e));
  }
}
