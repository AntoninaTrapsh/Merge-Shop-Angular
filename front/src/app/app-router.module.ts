import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {ErrorComponent} from "./components/error/error.component";
import {HomeComponent} from "./components/home/home.component";
import {DetailsComponent} from "./components/details/details.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {AuthGuard} from "./auth.guard";
import {AccessComponent} from "./components/access/access.component";

const routes: Routes = [
  {path: 'catalog/:item', component: DetailsComponent, canActivate: [AuthGuard]},
  {path: 'catalog', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AccessComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', component: HomeComponent},
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
