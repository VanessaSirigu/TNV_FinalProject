import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommentApiComponent } from './edit-comment-api.component';

describe('EditCommentApiComponent', () => {
  let component: EditCommentApiComponent;
  let fixture: ComponentFixture<EditCommentApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommentApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
