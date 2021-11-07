import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCommentsComponent } from './community-comments.component';

describe('CommunityCommentsComponent', () => {
  let component: CommunityCommentsComponent;
  let fixture: ComponentFixture<CommunityCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
