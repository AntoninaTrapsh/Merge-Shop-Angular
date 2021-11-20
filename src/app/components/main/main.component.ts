import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public cards: any = [
    {name: "ggg", price: 444, img: "ttt"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
