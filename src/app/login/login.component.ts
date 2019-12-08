import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: Boolean = false;
  loginResponse: any;

  constructor(
    private authenticationService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService) {
      // redirect to dashboard if already logged in
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/dashboard']);
      }
    }

  ngOnInit() {
    // login form validations
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // getter for easy access to form fields
  get loginControls() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loginResponse = this.authenticationService.login(this.loginControls.username.value, this.loginControls.password.value);
    let userData = { 'username': this.loginControls.username.value, 'password': this.loginControls.password.value }

    if (this.loginResponse.status === 'success' && this.loginResponse.token) {
      // Store user details in session storage to keep user logged in between page refreshes
      sessionStorage.setItem('user', JSON.stringify(userData));
      this.alertService.success('Login Successful', '');
      this.router.navigate(['/dashboard']);
    } else {
      this.alertService.error(this.loginResponse.errorMessage, '');
    }
  }

}
