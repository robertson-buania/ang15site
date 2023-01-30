import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeuseDetailComponent } from './vendeuse-detail.component';

describe('VendeuseDetailComponent', () => {
  let component: VendeuseDetailComponent;
  let fixture: ComponentFixture<VendeuseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeuseDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendeuseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
