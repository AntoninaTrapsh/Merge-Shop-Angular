import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {ErrorComponent} from "./components/error/error.component";
import {HomeComponent} from "./components/home/home.component";
import {DetailsComponent} from "./components/details/details.component";
import {ContactsComponent} from "./components/contacts/contacts.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: MainComponent},
  {path: 'catalog/:item', component: DetailsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
