import {Component, OnInit, Output, EventEmitter} from '@angular/core';

interface CartProduct {
  name: string,
  price: number,
  quantity: number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output() deleteCart = new EventEmitter<void>();
  public productItems: CartProduct[] = [];
  constructor() {}

  ngOnInit(): void {
    this.loadProductsCart().then((data) => {this.productItems = data})
  }

  async loadProductsCart() : Promise<CartProduct[]>{
    const response: Response = await fetch("http://localhost:3000/cart");
    return await response.json();
  }
}
