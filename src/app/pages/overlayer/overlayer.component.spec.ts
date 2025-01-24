import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayerComponent } from './overlayer.component';

describe('OverlayerComponent', () => {
  let component: OverlayerComponent;
  let fixture: ComponentFixture<OverlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
