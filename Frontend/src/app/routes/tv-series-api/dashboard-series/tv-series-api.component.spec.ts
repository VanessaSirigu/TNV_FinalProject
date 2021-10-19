import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesApiComponent } from './tv-series-api.component';

describe('TvSeriesApiComponent', () => {
  let component: TvSeriesApiComponent;
  let fixture: ComponentFixture<TvSeriesApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSeriesApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeriesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
