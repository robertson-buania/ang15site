import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireEditComponent } from './prestataire-edit.component';

describe('PrestataireEditComponent', () => {
  let component: PrestataireEditComponent;
  let fixture: ComponentFixture<PrestataireEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestataireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
