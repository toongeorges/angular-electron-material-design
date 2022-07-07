import { Component, OnInit } from '@angular/core';
import { ElectronService } from './core/services/electron/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  componentCssClass: string;

  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private overlayContainer: OverlayContainer
  ) {
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
    } else {
      console.log('Run in browser');
    }
  }

  ngOnInit(): void {
    this.onSetTheme('dark-theme');
  }

  onSetTheme(theme: string) {
    if (theme === this.componentCssClass) {
      //ignore change
    } else {
      if (
        (theme === 'dark-theme')
     || (theme === 'light-theme')
     || (theme === 'custom-theme')
      ) {
        this.resetTheme(theme);
      } else {
        console.error('Unknown theme: ' + theme);
      }
    }
  }

  resetTheme(theme: string) { //does not reset the style of the outer scrollbars on the body element though
    const body = document.getElementsByTagName('body')[0];

    if (this.componentCssClass) {
      //remove the old style
      body.classList.remove(this.componentCssClass);
      this.overlayContainer.getContainerElement().classList.remove(this.componentCssClass);
    }

    this.componentCssClass = theme;
    //set the new style
    body.classList.add(this.componentCssClass);
    this.overlayContainer.getContainerElement().classList.add(this.componentCssClass);
  }
}
