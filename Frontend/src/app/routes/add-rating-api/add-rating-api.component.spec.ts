import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRatingApiComponent } from './add-rating-api.component';

describe('AddRatingApiComponent', () => {
  let component: AddRatingApiComponent;
  let fixture: ComponentFixture<AddRatingApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRatingApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRatingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
