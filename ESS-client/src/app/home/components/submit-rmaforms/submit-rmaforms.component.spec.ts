import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRmaformsComponent } from './submit-rmaforms.component';

describe('SubmitRmaformsComponent', () => {
  let component: SubmitRmaformsComponent;
  let fixture: ComponentFixture<SubmitRmaformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitRmaformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitRmaformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
