import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../core/modules/material-design/material-design.module';

import { RipplesComponent } from './ripples.component';

describe('RipplesComponent', () => {
  let component: RipplesComponent;
  let fixture: ComponentFixture<RipplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RipplesComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialDesignModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RipplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
