import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeuseListComponent } from './vendeuse-list.component';

describe('VendeuseListComponent', () => {
  let component: VendeuseListComponent;
  let fixture: ComponentFixture<VendeuseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeuseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendeuseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
