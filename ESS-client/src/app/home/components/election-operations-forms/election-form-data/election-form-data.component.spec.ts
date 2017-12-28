import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionFormDataComponent } from './election-form-data.component';

describe('ElectionFormDataComponent', () => {
  let component: ElectionFormDataComponent;
  let fixture: ComponentFixture<ElectionFormDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionFormDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
