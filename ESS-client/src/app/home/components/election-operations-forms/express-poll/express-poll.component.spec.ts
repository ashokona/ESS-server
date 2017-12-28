import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressPollComponent } from './express-poll.component';

describe('ExpressPollComponent', () => {
  let component: ExpressPollComponent;
  let fixture: ComponentFixture<ExpressPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
