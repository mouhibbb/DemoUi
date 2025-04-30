import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutMoneyComponent } from './put-money.component';

describe('PutMoneyComponent', () => {
  let component: PutMoneyComponent;
  let fixture: ComponentFixture<PutMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutMoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
