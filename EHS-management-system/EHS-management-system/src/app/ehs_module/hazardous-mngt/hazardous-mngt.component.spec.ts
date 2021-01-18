import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardousMngtComponent } from './hazardous-mngt.component';

describe('HazardousMngtComponent', () => {
  let component: HazardousMngtComponent;
  let fixture: ComponentFixture<HazardousMngtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardousMngtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardousMngtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
