import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class SnackbarService {

  snackbarRefs: MatSnackBarRef<any>[] = [];

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackbarRefs.push(this._snackBar.open(message, null, {
      duration: 1500
    }));
  }
}
