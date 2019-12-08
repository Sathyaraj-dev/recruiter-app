import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private router: Router) { }

  // Set the login user name and password
  loginData = { 'username': 'Admin', 'password': 'Admin@1234'};
  successResponse = { status: 'success', token: '1fbc42a5-92e0-4f5d-874f-3cf8b157449c' };
  failedResponse = { status: 'failed', errorMessage: 'Username or password is incorrect' };

  public get currentUserValue() {
    let user = sessionStorage.getItem('user');
    return user;
  }

  login(username: string, password: string) {
    let data = { username: username, password: password };
    let statusResponse;

    if (this.loginData.username === data.username && this.loginData.password === data.password) {
      statusResponse = this.successResponse;
    } else {
      statusResponse = this.failedResponse;;
    }
    return statusResponse;
  }

  logout() {
    // Remove user from session storage to log user out
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
