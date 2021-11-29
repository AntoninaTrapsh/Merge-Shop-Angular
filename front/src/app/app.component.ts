import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {CartService} from "./services/cart.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public cartIsOpen : boolean = false;

  constructor(public auth: AuthService, public cartService: CartService) {
  }

  ngOnInit() {
     this.cartService.loadProductCart();
  }

  openCart(): void {
    this.cartIsOpen = true;
  }

  closeCart(): void {
    this.cartIsOpen = false;
  }

}
