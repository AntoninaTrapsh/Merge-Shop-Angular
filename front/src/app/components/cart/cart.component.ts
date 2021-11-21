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
    this.cartService.loadProductCart().subscribe((data) => {
      this.productItems = data
    });
  }

  deleteProduct(name: string) {
   this.cartService.deleteProduct(name).subscribe((data) => {
     this.productItems = data;
   })
  }

  changeQuantity(name: string, action: ChangeCountActions) {
    this.cartService.changeQuantity(name, action).subscribe((data) => {
      this.productItems = data;
    })
  }
}
