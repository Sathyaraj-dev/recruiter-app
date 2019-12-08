import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
  exports: [
    MatCardModule, 
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule, 
    MatButtonModule, 
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
})
export class MaterialModule { } 