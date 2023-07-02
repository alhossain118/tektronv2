import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotSliderComponent } from './screenshot-slider.component';

describe('ScreenshotSliderComponent', () => {
  let component: ScreenshotSliderComponent;
  let fixture: ComponentFixture<ScreenshotSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenshotSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
