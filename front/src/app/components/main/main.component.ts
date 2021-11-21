import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
interface Product {
  name: string,
  price: string,
  image: string,
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public products: Product[] = [];

  constructor(public productService: ProductsService) {
  }

  ngOnInit(): void {
    this.productService.loadProducts().subscribe((data) => {
      this.products = data
    })
  }
}
