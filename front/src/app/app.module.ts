import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {MainComponent} from './components/main/main.component';
import {FooterComponent} from './components/footer/footer.component';
import {CartComponent} from './components/cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRouterModule} from "./app-router.module";
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import { DetailsComponent } from './components/details/details.component';
import { BuyButtonComponent } from './components/buy-button/buy-button.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CartComponent,
    ErrorComponent,
    HomeComponent,
    DetailsComponent,
    BuyButtonComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
