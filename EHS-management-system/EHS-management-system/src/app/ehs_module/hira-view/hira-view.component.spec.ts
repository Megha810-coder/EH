import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraViewComponent } from './hira-view.component';

describe('HiraViewComponent', () => {
  let component: HiraViewComponent;
  let fixture: ComponentFixture<HiraViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiraViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
