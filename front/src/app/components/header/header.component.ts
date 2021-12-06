import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {AuthService} from "../../auth.service";
import {CartService} from "../../services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  quantityProduct:number = 0;
  private cart: Subscription = new Subscription();

  @Output() openCart = new EventEmitter<void>();

  constructor(public auth: AuthService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCountProduct().subscribe((data) => {
      this.quantityProduct = data;
    })
  }

  ngOnDestroy():void {
    this.cart.unsubscribe();
  }
}
