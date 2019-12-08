import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

export class AlertService {
    constructor(private _snackBar: MatSnackBar) {}

    success(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 1000,
            verticalPosition: 'top',
            panelClass: ['bg-success', 'text-white']
        });
    }

    error(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 1000,
            verticalPosition: 'top',
            panelClass: ['bg-danger', 'text-white']
        });
    }
}