import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMovieApiComponent } from './details-movie-api.component';

describe('DetailsMovieApiComponent', () => {
  let component: DetailsMovieApiComponent;
  let fixture: ComponentFixture<DetailsMovieApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMovieApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMovieApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
