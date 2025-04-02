import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompteComponent } from './dashboard-compte.component';

describe('DashboardCompteComponent', () => {
  let component: DashboardCompteComponent;
  let fixture: ComponentFixture<DashboardCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCompteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
