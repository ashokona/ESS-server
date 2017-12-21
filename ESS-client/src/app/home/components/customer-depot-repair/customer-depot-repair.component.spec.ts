import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDepotRepairComponent } from './customer-depot-repair.component';

describe('CustomerDepotRepairComponent', () => {
  let component: CustomerDepotRepairComponent;
  let fixture: ComponentFixture<CustomerDepotRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDepotRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDepotRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
