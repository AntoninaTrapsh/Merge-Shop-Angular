import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  @Output() buyProduct = new EventEmitter<void>();

  ngOnInit(): void {
  }

}
