import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueMiddleComponent } from './statistique-middle.component';

describe('StatistiqueMiddleComponent', () => {
  let component: StatistiqueMiddleComponent;
  let fixture: ComponentFixture<StatistiqueMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueMiddleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
