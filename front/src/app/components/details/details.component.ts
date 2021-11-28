import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: Product[] = [];
  constructor(public productService: ProductsService, public activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(params => {
      const param = params["item"]
      this.load(param)
    })
  }

  load(param: string) {
    this.productService.detailsProduct(param).subscribe((data) => {
      this.product = data;
    })
  }

}
