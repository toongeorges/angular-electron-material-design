import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../core/modules/material-design/material-design.module';

import { SlideToggleComponent } from './slide-toggle.component';

describe('SlideToggleComponent', () => {
  let component: SlideToggleComponent;
  let fixture: ComponentFixture<SlideToggleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideToggleComponent ],
      imports: [
        FormsModule,
        MaterialDesignModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
