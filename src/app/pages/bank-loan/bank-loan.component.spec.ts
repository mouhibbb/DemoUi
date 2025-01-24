import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLoanComponent } from './bank-loan.component';

describe('BankLoanComponent', () => {
  let component: BankLoanComponent;
  let fixture: ComponentFixture<BankLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
