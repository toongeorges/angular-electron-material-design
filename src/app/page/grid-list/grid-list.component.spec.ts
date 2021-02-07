import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialDesignModule } from '../../core/modules/material-design/material-design.module';

import { GridListComponent } from './grid-list.component';

describe('GridListComponent', () => {
  let component: GridListComponent;
  let fixture: ComponentFixture<GridListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListComponent ],
      imports: [ MaterialDesignModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
