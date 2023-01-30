import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeuseEditComponent } from './vendeuse-edit.component';

describe('VendeuseEditComponent', () => {
  let component: VendeuseEditComponent;
  let fixture: ComponentFixture<VendeuseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeuseEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendeuseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
