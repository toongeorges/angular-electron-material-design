import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ElectronService } from 'app/core/services/electron/electron.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  value = 'Clear me';
  folder: string = "";

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private electronService: ElectronService
  ) { }

  ngOnInit(): void {
  }

  openFolderDialog() {
    //see https://www.electronjs.org/docs/api/dialog
    this.electronService.remote.dialog.showOpenDialog(
      { properties: ['openDirectory'] }
    ).then(result => {
      console.log("The folder has been selected: " + !result.canceled)
      console.log("The selected folder: " + result.filePaths[0])
      if (!result.canceled) {
        this.folder = result.filePaths[0];
      }
    }).catch(err => {
      console.log(err);
    });
  }
}
