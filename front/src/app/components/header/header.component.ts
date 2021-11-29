import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() createCart = new EventEmitter<void>();

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
