import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRatingApiComponent } from './edit-rating-api.component';

describe('EditRatingApiComponent', () => {
  let component: EditRatingApiComponent;
  let fixture: ComponentFixture<EditRatingApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRatingApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRatingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
