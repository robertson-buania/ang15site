import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueNavComponent } from './statistique-nav.component';

describe('StatistiqueNavComponent', () => {
  let component: StatistiqueNavComponent;
  let fixture: ComponentFixture<StatistiqueNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
