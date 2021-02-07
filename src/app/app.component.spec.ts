import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialDesignModule } from './core/modules/material-design/material-design.module';
import { ElectronService } from './core/services/electron/electron.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, MatIcon ],
      providers: [ElectronService],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialDesignModule,
        RouterTestingModule,
        MatIconTestingModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
