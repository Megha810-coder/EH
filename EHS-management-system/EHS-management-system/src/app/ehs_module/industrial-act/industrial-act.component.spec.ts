import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialActComponent } from './industrial-act.component';

describe('IndustrialActComponent', () => {
  let component: IndustrialActComponent;
  let fixture: ComponentFixture<IndustrialActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrialActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
