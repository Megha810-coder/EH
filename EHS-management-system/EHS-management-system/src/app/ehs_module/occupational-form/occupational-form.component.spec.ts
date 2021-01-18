import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalFormComponent } from './occupational-form.component';

describe('OccupationalFormComponent', () => {
  let component: OccupationalFormComponent;
  let fixture: ComponentFixture<OccupationalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
