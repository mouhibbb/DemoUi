import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCreditComponent } from './consult-credit.component';

describe('ConsultCreditComponent', () => {
  let component: ConsultCreditComponent;
  let fixture: ComponentFixture<ConsultCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultCreditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
