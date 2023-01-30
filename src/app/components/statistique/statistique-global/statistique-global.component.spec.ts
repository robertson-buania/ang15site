import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueGlobalComponent } from './statistique-global.component';

describe('StatistiqueGlobalComponent', () => {
  let component: StatistiqueGlobalComponent;
  let fixture: ComponentFixture<StatistiqueGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
