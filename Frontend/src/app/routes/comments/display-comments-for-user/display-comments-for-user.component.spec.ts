import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCommentsForUserComponent } from './display-comments-for-user.component';

describe('DisplayCommentsForUserComponent', () => {
  let component: DisplayCommentsForUserComponent;
  let fixture: ComponentFixture<DisplayCommentsForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCommentsForUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCommentsForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
