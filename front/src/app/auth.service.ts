import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  getAuthState():BehaviorSubject<boolean> {
    return this.isAuth$
  }

  checkAuth(): void {
    if (this.isAuth$.getValue()) {
      this.isAuth$.next(false);
      alert("Вы успешно вышли из системы");
      return;
    } else {
      this.isAuth$.next(true);
      alert("Вы успешно авторизировались");
      return;
    }
  }
}
