import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularFilmsComponent } from './most-popular-films.component';

describe('MostPopularFilmsComponent', () => {
  let component: MostPopularFilmsComponent;
  let fixture: ComponentFixture<MostPopularFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
