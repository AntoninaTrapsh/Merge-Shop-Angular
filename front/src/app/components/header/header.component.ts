import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from "../../auth.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  quantityProduct:number = 0;
  @Output() createCart = new EventEmitter<void>();

  constructor(public auth: AuthService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCountProduct().subscribe((data) => {
      this.quantityProduct = data;
    })
  }

}
