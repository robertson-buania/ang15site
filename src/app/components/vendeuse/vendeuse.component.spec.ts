import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeuseComponent } from './vendeuse.component';

describe('VendeuseComponent', () => {
  let component: VendeuseComponent;
  let fixture: ComponentFixture<VendeuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeuseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
