import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRatingComponent } from './chart-rating.component';

describe('ChartRatingComponent', () => {
  let component: ChartRatingComponent;
  let fixture: ComponentFixture<ChartRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
