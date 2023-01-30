import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandePrestataireComponent } from './commande-prestataire.component';

describe('CommandePrestataireComponent', () => {
  let component: CommandePrestataireComponent;
  let fixture: ComponentFixture<CommandePrestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandePrestataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandePrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
