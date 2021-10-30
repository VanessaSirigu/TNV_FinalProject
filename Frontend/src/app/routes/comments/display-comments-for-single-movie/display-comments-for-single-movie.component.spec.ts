import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCommentsForSingleMovieComponent } from './display-comments-for-single-movie.component';

describe('DisplayCommentsForSingleMovieComponent', () => {
  let component: DisplayCommentsForSingleMovieComponent;
  let fixture: ComponentFixture<DisplayCommentsForSingleMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCommentsForSingleMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCommentsForSingleMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
