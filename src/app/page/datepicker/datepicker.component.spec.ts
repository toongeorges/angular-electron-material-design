import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../../core/modules/material-design/material-design.module';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';

import { DatepickerComponent } from './datepicker.component';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerComponent, MatIcon ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialDesignModule,
        MatIconTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
