import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeVendeuseComponent } from './commande-vendeuse.component';

describe('CommandeVendeuseComponent', () => {
  let component: CommandeVendeuseComponent;
  let fixture: ComponentFixture<CommandeVendeuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeVendeuseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeVendeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
