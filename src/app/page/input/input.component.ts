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
    console.error("electron is sometimes much more complicated than it needs to be");
    console.error("check out https://www.electronjs.org/docs/api/dialog what is supposed to happen");
    console.error("though this does NOT happen out of the box");
    console.error(
      "look for clues how to fix the electron usability bug " +
      "at https://www.electronjs.org/docs/latest/tutorial/context-isolation " +
      "and https://stackoverflow.com/questions/57807459/how-to-use-preload-js-properly-in-electron " +
      "and https://medium.com/developer-rants/opening-system-dialogs-in-electron-from-the-renderer-6daf49782fd8"
    );
    console.log("I stopped supporting this feature.");

    //see https://www.electronjs.org/docs/api/dialog
    /*
    this.electronService.dialog.showOpenDialog(
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
    */
  }
}
