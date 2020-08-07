import { Component, HostBinding } from '@angular/core';
import { ElectronService } from './core/services/electron/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') componentCssClass;
  selectedTheme: string = "dark-theme";

  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private overlayContainer: OverlayContainer
  ) {
    this.translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }

  onSetTheme(theme: string) {
    if (theme === this.selectedTheme) {
      //ignore change
    } else {
      if (theme == 'dark-theme') {
        this.resetTheme(theme, true);
      } else if (theme == 'light-theme') {
        this.resetTheme(theme, false);
      } else {
        console.error("Unknown theme: " + theme);
      }
    }
  }

  resetTheme(theme: string, dark: boolean) {
    let classList = this.overlayContainer.getContainerElement().classList;
    classList.remove(this.selectedTheme);
    this.selectedTheme = theme;
    classList.add(this.selectedTheme);
    this.componentCssClass = theme;
    this.setDarkBackGround(dark);
  }

  setDarkBackGround(dark: boolean) {
    const body = document.getElementsByTagName('body')[0];
    if (dark) {
      body.classList.add('mat-app-background');
    } else {
      body.classList.remove('mat-app-background');
    }
  }
}
