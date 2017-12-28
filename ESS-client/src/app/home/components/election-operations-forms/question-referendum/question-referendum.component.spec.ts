import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionReferendumComponent } from './question-referendum.component';

describe('QuestionReferendumComponent', () => {
  let component: QuestionReferendumComponent;
  let fixture: ComponentFixture<QuestionReferendumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionReferendumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionReferendumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
