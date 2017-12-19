import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionformsComponent } from './electionforms.component';

describe('ElectionformsComponent', () => {
  let component: ElectionformsComponent;
  let fixture: ComponentFixture<ElectionformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
