import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule }    from '@angular/forms';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateListComponent } from './dashboard/candidate-list/candidate-list.component';
import { AuthService } from './services/auth.service';
import { RecruiterService } from './services/recruiter.service';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CandidateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    RecruiterService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
