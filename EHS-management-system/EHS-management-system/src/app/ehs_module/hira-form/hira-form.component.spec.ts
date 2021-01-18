import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraFormComponent } from './hira-form.component';

describe('HiraFormComponent', () => {
  let component: HiraFormComponent;
  let fixture: ComponentFixture<HiraFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiraFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
