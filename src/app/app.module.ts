import 'reflect-metadata';
import '../polyfills';

import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//The email input field on the URL /input requires ReactiveFormsModule instead of FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './core/modules/app-routing/app-routing.module';
import { MaterialDesignModule } from './core/modules/material-design/material-design.module';
import { MatIconRegistry } from '@angular/material/icon';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './page/welcome/welcome.component';
import { ButtonComponent } from './page/button/button.component';
import { IconComponent } from './page/icon/icon.component';
import { MenuComponent } from './page/menu/menu.component';
import { SidenavComponent } from './page/sidenav/sidenav.component';
import { ToolbarComponent } from './page/toolbar/toolbar.component';
import { ButtonToggleComponent } from './page/button-toggle/button-toggle.component';
import { DividerComponent } from './page/divider/divider.component';
import { ListComponent } from './page/list/list.component';
import { FormFieldComponent } from './page/form-field/form-field.component';
import { SelectComponent } from './page/select/select.component';
import { InputComponent } from './page/input/input.component';
import { CheckboxComponent } from './page/checkbox/checkbox.component';
import { AutocompleteComponent } from './page/autocomplete/autocomplete.component';
import { SlideToggleComponent } from './page/slide-toggle/slide-toggle.component';
import { RadioButtonComponent } from './page/radio-button/radio-button.component';
import { BadgeComponent } from './page/badge/badge.component';
import { BottomSheetComponent } from './page/bottom-sheet/bottom-sheet.component';
import { BottomSheetContentComponent } from './page/bottom-sheet/bottom-sheet-content/bottom-sheet-content.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ButtonComponent,
    IconComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    ButtonToggleComponent,
    DividerComponent,
    ListComponent,
    FormFieldComponent,
    SelectComponent,
    InputComponent,
    CheckboxComponent,
    AutocompleteComponent,
    SlideToggleComponent,
    RadioButtonComponent,
    BadgeComponent,
    BottomSheetComponent,
    BottomSheetContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    MaterialDesignModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { //see https://dev.materialdesignicons.com/getting-started/angular
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
