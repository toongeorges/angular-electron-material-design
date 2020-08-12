import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerOverlayComponent } from './progress-spinner-overlay.component';

describe('ProgressSpinnerOverlayComponent', () => {
  let component: ProgressSpinnerOverlayComponent;
  let fixture: ComponentFixture<ProgressSpinnerOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerOverlayComponent ]
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
