import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashComponentComponent } from './my-dash-component.component';

describe('MyDashComponentComponent', () => {
  let component: MyDashComponentComponent;
  let fixture: ComponentFixture<MyDashComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
