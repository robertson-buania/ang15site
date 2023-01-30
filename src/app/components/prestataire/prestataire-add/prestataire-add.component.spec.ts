import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireAddComponent } from './prestataire-add.component';

describe('PrestataireAddComponent', () => {
  let component: PrestataireAddComponent;
  let fixture: ComponentFixture<PrestataireAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestataireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
