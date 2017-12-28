import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecinctListComponent } from './precinct-list.component';

describe('PrecinctListComponent', () => {
  let component: PrecinctListComponent;
  let fixture: ComponentFixture<PrecinctListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecinctListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecinctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
