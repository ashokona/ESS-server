import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionOperationsFormsComponent } from './election-operations-forms.component';

describe('ElectionOperationsFormsComponent', () => {
  let component: ElectionOperationsFormsComponent;
  let fixture: ComponentFixture<ElectionOperationsFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionOperationsFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionOperationsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
