import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireItemComponent } from './prestataire-item.component';

describe('PrestataireItemComponent', () => {
  let component: PrestataireItemComponent;
  let fixture: ComponentFixture<PrestataireItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestataireItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
