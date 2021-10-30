import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTvServiesApiComponent } from './details-tv-servies-api.component';

describe('DetailsTvServiesApiComponent', () => {
  let component: DetailsTvServiesApiComponent;
  let fixture: ComponentFixture<DetailsTvServiesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTvServiesApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTvServiesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
