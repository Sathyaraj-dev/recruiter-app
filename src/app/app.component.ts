import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'recruiter-app';

  constructor(private authenticationService: AuthService) {}

  logout() {
    this.authenticationService.logout();
  }
}
