import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieRatingComponent } from './add-movie-rating.component';

describe('AddMovieRatingComponent', () => {
  let component: AddMovieRatingComponent;
  let fixture: ComponentFixture<AddMovieRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
