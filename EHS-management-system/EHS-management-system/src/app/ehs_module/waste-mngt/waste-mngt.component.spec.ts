import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteMngtComponent } from './waste-mngt.component';

describe('WasteMngtComponent', () => {
  let component: WasteMngtComponent;
  let fixture: ComponentFixture<WasteMngtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasteMngtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasteMngtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
