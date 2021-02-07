import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../core/modules/material-design/material-design.module';

import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarComponent ],
      imports: [ 
        FormsModule,
        MaterialDesignModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
