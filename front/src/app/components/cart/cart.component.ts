import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CartService} from "../../services/cart.service";

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

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.loadProductsCart().then((data) => {
      this.productItems = data
    }).catch((e) => console.log(e))
  }

  async deleteProduct(name: string) {
   await this.cartService.deleteProduct(name)
     .then((data: CartProduct[]) => {
       this.productItems = data
     })
     .catch((e) => console.log(e));
  }

  async changeQuantity(name: string, action: ChangeCountActions): Promise<void> {
    await this.cartService.changeQuantity(name, action)
      .then((data: CartProduct[]) => this.productItems = data)
      .catch((e)=>console.log(e));
  }
}
