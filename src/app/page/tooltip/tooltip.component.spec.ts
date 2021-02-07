import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialDesignModule } from '../../core/modules/material-design/material-design.module';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';

import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipComponent, MatIcon ],
      imports: [ MaterialDesignModule, MatIconTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
