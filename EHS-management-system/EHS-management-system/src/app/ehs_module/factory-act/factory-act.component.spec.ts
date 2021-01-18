import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryActComponent } from './factory-act.component';

describe('FactoryActComponent', () => {
  let component: FactoryActComponent;
  let fixture: ComponentFixture<FactoryActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
