import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../../core/modules/material-design/material-design.module';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';

import { ExpansionPanelComponent } from './expansion-panel.component';

describe('ExpansionPanelComponent', () => {
  let component: ExpansionPanelComponent;
  let fixture: ComponentFixture<ExpansionPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionPanelComponent, MatIcon ],
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
    fixture = TestBed.createComponent(ExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
