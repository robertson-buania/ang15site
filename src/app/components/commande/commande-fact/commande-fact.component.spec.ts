import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeFactComponent } from './commande-fact.component';

describe('CommandeFactComponent', () => {
  let component: CommandeFactComponent;
  let fixture: ComponentFixture<CommandeFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeFactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
