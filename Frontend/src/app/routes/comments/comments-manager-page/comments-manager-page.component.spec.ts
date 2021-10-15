import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsManagerPageComponent } from './comments-manager-page.component';

describe('CommentsManagerPageComponent', () => {
  let component: CommentsManagerPageComponent;
  let fixture: ComponentFixture<CommentsManagerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsManagerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
