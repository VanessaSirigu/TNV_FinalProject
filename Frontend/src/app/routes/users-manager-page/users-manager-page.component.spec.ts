import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersManagerPageComponent } from './users-manager-page.component';

describe('UsersManagerPageComponent', () => {
  let component: UsersManagerPageComponent;
  let fixture: ComponentFixture<UsersManagerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersManagerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
