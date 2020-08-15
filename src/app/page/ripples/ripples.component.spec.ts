import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RipplesComponent } from './ripples.component';

describe('RipplesComponent', () => {
  let component: RipplesComponent;
  let fixture: ComponentFixture<RipplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RipplesComponent ]
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
