import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    sessionStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return sessionStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["/login"]);
  }
  isAdminUser():boolean {
    if (this.getToken() !== null) {
      return true;
    }
    return false;
  }
}
