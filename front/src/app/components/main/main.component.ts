import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public products: Product[] = [];
  public searchValue: string = "";

  constructor(public productService: ProductsService) {
  }

  ngOnInit(): void {
    this.productService.loadProducts().subscribe((data) => {
      this.products = data
    })
  }

  searchProduct() {
    this.productService.searchProduct(this.searchValue).subscribe((data) => {
      this.products = data;
    });
  }
}
