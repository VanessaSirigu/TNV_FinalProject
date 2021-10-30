import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGenreComponent } from './chart-genre.component';

describe('ChartGenreComponent', () => {
  let component: ChartGenreComponent;
  let fixture: ComponentFixture<ChartGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
