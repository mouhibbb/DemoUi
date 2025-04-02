import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBankTransferComponent } from './users-bank-transfer.component';

describe('UsersBankTransferComponent', () => {
  let component: UsersBankTransferComponent;
  let fixture: ComponentFixture<UsersBankTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersBankTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersBankTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
