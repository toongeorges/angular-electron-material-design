import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../../core/modules/material-design/material-design.module';

import { ProgressSpinnerOverlayComponent } from './progress-spinner-overlay.component';

describe('ProgressSpinnerOverlayComponent', () => {
  let component: ProgressSpinnerOverlayComponent;
  let fixture: ComponentFixture<ProgressSpinnerOverlayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerOverlayComponent ],
      imports: [
        FormsModule,
        MaterialDesignModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
