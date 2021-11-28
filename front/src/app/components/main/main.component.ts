import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product.model";
import {Subscription} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public searchValue: string = "";
  private loadProducts$: Subscription = new Subscription();
  constructor(public productService: ProductsService) {
  }

  ngOnInit(): void {
    this.loadProducts$ = this.productService.loadProducts().subscribe((data) => {
      this.products = data
    }, (er) => {
      console.log("Error", er);
    })
  }

  ngOnDestroy(): void {
    this.loadProducts$.unsubscribe();

  }

  searchProduct() {
    this.productService.searchProduct(this.searchValue).pipe(
      take(1),
    ).subscribe((data) => {
      this.products = data;
    }, (er) => {
      console.log("Error", er);
    });
  }
}
