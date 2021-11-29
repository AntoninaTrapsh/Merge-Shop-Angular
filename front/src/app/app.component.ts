import { Component } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cartIsOpen : boolean = false;

  constructor(public auth: AuthService) {
  }

  openCart(): void {
    this.cartIsOpen = true;
  }

  closeCart(): void {
    this.cartIsOpen = false;
  }

}
