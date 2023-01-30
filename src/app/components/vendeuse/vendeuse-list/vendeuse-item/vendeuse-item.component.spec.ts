import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeuseItemComponent } from './vendeuse-item.component';

describe('VendeuseItemComponent', () => {
  let component: VendeuseItemComponent;
  let fixture: ComponentFixture<VendeuseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeuseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendeuseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
