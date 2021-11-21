import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartProduct, ChangeCountActions} from "../../models/product.model";

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
    }, ((e) => {console.log("Error!", e)}));
  }

  deleteProduct(name: string): void {
   this.cartService.deleteProduct(name).subscribe((data) => {
     this.productItems = data;
   }, ((e) => {console.log("Error!", e)}));
  }

  changeQuantity(name: string, action: ChangeCountActions): void {
    this.cartService.changeQuantity(name, action).subscribe((data) => {
      this.productItems = data;
    }, ((e) => {console.log("Error!", e)}))
  }
}
