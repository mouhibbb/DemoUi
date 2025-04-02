import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultNvCompteComponent } from './consult-nv-compte.component';

describe('ConsultNvCompteComponent', () => {
  let component: ConsultNvCompteComponent;
  let fixture: ComponentFixture<ConsultNvCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultNvCompteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultNvCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
