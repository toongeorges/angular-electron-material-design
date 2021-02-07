import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../../core/modules/material-design/material-design.module';

import { SortHeaderComponent } from './sort-header.component';

describe('SortHeaderComponent', () => {
  let component: SortHeaderComponent;
  let fixture: ComponentFixture<SortHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SortHeaderComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialDesignModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
