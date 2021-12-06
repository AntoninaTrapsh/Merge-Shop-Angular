import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartProduct, ChangeCountActions} from "../../models/product.model";
import {Subscription} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  @Output() closeCart = new EventEmitter<void>();

  public productItems: CartProduct[] = [];
  public Actions = ChangeCountActions;
  private loadCart: Subscription = new Subscription();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.loadProductCart();
    this.loadCart = this.cartService.getProductCart().subscribe((data) => {
      this.productItems = data
    }, ((e) => {console.log("Error!", e)}));
  }

  ngOnDestroy(): void {
    this.loadCart.unsubscribe();
  }

  deleteProduct(name: string): void {
   this.cartService.deleteProduct(name).pipe(
     take(1)
   ).subscribe((data) => {
     this.productItems = data;
     this.cartService.totalProducts(data);
   }, ((e) => {console.log("Error!", e)}));
  }

  changeQuantity(name: string, action: ChangeCountActions): void {
    this.cartService.changeQuantity(name, action).pipe(
      take(1)
    ).subscribe((data) => {
      this.productItems = data;
      this.cartService.totalProducts(data);
    }, ((e) => {console.log("Error!", e)}))
  }
}
