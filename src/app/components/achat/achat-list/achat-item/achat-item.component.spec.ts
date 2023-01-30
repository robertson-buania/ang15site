import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatItemComponent } from './achat-item.component';

describe('AchatItemComponent', () => {
  let component: AchatItemComponent;
  let fixture: ComponentFixture<AchatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
