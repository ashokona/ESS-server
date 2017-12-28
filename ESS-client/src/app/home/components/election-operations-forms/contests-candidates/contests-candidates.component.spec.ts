import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestsCandidatesComponent } from './contests-candidates.component';

describe('ContestsCandidatesComponent', () => {
  let component: ContestsCandidatesComponent;
  let fixture: ComponentFixture<ContestsCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestsCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestsCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
