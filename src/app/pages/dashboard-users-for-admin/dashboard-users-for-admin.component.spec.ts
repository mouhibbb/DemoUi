import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUsersForAdminComponent } from './dashboard-users-for-admin.component';

describe('DashboardUsersForAdminComponent', () => {
  let component: DashboardUsersForAdminComponent;
  let fixture: ComponentFixture<DashboardUsersForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUsersForAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUsersForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
