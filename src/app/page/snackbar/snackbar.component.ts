import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarContentComponent } from './snackbar-content/snackbar-content.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  durationInSeconds = 5;

  componentRef: MatSnackBarRef<SnackbarContentComponent>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  openCustomSnackBar() {
    this.componentRef = this._snackBar.openFromComponent(SnackbarContentComponent, {
      duration: this.durationInSeconds * 1000,
      data: {
        close: () => { this.closeCustomSnackBar(); }
      }
    });
  }

  closeCustomSnackBar() {
    if (this.componentRef) {
      this.componentRef.dismiss();
      this.componentRef = null;
    }
  }

  openBasicSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openConfigurableSnackBar() {
    this._snackBar.open('Cannonball!!', 'End now', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
