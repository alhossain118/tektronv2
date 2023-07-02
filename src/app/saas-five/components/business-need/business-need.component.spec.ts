import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessNeedComponent } from './business-need.component';

describe('BusinessNeedComponent', () => {
  let component: BusinessNeedComponent;
  let fixture: ComponentFixture<BusinessNeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessNeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
