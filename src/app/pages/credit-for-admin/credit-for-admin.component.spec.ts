import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditForAdminComponent } from './credit-for-admin.component';

describe('CreditForAdminComponent', () => {
  let component: CreditForAdminComponent;
  let fixture: ComponentFixture<CreditForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditForAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
