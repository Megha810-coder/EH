import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndustComponent } from './view-indust.component';

describe('ViewIndustComponent', () => {
  let component: ViewIndustComponent;
  let fixture: ComponentFixture<ViewIndustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIndustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIndustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
