import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth: boolean = false;
  constructor() { }

  checkAuth(): void {
    if (this.isAuth) {
      this.isAuth = false;
      alert("Вы успешно вышли из системы");
      return;
    } else {
      this.isAuth = true;
      alert("Вы успешно авторизировались");
      return;
    }
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 1000)
    })
  }
}
