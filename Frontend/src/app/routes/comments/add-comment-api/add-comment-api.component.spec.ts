import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentApiComponent } from './add-comment-api.component';

describe('AddCommentComponent', () => {
  let component: AddCommentApiComponent;
  let fixture: ComponentFixture<AddCommentApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommentApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
