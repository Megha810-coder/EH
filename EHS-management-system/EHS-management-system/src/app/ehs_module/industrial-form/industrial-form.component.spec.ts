import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialFormComponent } from './industrial-form.component';

describe('IndustrialFormComponent', () => {
  let component: IndustrialFormComponent;
  let fixture: ComponentFixture<IndustrialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
