import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotAssignmentReviewComponent } from './ballot-assignment-review.component';

describe('BallotAssignmentReviewComponent', () => {
  let component: BallotAssignmentReviewComponent;
  let fixture: ComponentFixture<BallotAssignmentReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotAssignmentReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotAssignmentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
