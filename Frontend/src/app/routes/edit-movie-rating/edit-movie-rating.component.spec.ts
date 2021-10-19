import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieRatingComponent } from './edit-movie-rating.component';

describe('EditMovieRatingComponent', () => {
  let component: EditMovieRatingComponent;
  let fixture: ComponentFixture<EditMovieRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMovieRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
