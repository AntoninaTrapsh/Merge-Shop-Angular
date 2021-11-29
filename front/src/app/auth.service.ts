import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth: boolean = false;
  constructor() { }

  login() {
    this.isAuth = true;
    alert("Вы успешно авторизировались");
  }

  logout() {
    this.isAuth = false;
    alert("Вы успешно вышли из системы");
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 1000)
    })
  }
}
