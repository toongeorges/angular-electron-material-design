import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../core/modules/material-design/material-design.module';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';

import { TreeComponent } from './tree.component';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeComponent, MatIcon ],
      imports: [
        FormsModule,
        MaterialDesignModule,
        MatIconTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
