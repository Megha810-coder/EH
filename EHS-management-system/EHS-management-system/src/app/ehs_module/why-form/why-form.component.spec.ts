import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyFormComponent } from './why-form.component';

describe('WhyFormComponent', () => {
  let component: WhyFormComponent;
  let fixture: ComponentFixture<WhyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
