import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeuseAddComponent } from './vendeuse-add.component';

describe('VendeuseAddComponent', () => {
  let component: VendeuseAddComponent;
  let fixture: ComponentFixture<VendeuseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeuseAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendeuseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
