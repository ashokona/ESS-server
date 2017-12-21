import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotRepairRequestComponent } from './depot-repair-request.component';

describe('DepotRepairRequestComponent', () => {
  let component: DepotRepairRequestComponent;
  let fixture: ComponentFixture<DepotRepairRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotRepairRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotRepairRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
