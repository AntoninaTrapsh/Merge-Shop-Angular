import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cartIsOpen : boolean = false;

  openCart(): void {
    this.cartIsOpen = true;
  }

  closeCart(): void {
    this.cartIsOpen = false;
  }

}
