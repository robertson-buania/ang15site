import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantineNavbarComponent } from './cantine-navbar.component';

describe('CantineNavbarComponent', () => {
  let component: CantineNavbarComponent;
  let fixture: ComponentFixture<CantineNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantineNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantineNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
