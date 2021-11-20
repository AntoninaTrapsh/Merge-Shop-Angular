import { Component, OnInit } from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
    this.loadProducts().then((data) => {
      this.products = data
    })
  }

  async loadProducts(): Promise<Product[]> {
    const response: Response = await fetch("http://localhost:3000");
    return await response.json();
  }

  async addToCart(name: string, price: string) {
    await fetch("http://localhost:3000/cart", {
      method: "POST", body: JSON.stringify({name, price, quantity: 1}), headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(name);
  }
}
