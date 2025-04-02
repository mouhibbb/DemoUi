import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutParMasseComponent } from './ajout-par-masse.component';

describe('AjoutParMasseComponent', () => {
  let component: AjoutParMasseComponent;
  let fixture: ComponentFixture<AjoutParMasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutParMasseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutParMasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
