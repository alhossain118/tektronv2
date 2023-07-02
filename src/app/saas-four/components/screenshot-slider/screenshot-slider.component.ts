import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../../sofbox/plugins.service';

@Component({
  selector: 'app-screenshot-slider',
  templateUrl: './screenshot-slider.component.html',
  styleUrls: ['./screenshot-slider.component.css']
})
export class ScreenshotSliderComponent implements OnInit {
  current: any = { image: './assets/sofbox-v2/images/home-5/501.jpeg', class: 'active' };

  List: any[] = [
    { image: './assets/sofbox-v2/images/home-5/501.jpeg', class: 'active' },
    { image: './assets/sofbox-v2/images/home-5/502.jpeg', class: 'proactive' },
    { image: './assets/sofbox-v2/images/home-5/503.jpeg', class: 'preactive' }
  ]

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    // setTimeout(function() {
    //   current.plugins.slideInitial();
    //   current.plugins.slideRight();
    // }, 500);
  }

  swipeLeft() {
    const currentArrayIndex = this.List.findIndex(e => e.image === this.current.image)
    let nextIndex = currentArrayIndex + 1
    let prevtIndex = currentArrayIndex - 1
    if (prevtIndex === -1) {
      prevtIndex = 2
    }
    if (nextIndex === 3) {
      nextIndex = 0
    }
    this.List[nextIndex].class = 'preactive'
    this.List[currentArrayIndex].class = 'proactive'
    this.List[prevtIndex].class = 'active'
    this.current = this.List[prevtIndex]
  }

  swipeRight() {
    const currentArrayIndex = this.List.findIndex(e => e.image === this.current.image)
    let nextIndex = currentArrayIndex + 1
    let prevtIndex = currentArrayIndex - 1
    if (prevtIndex === -1) {
      prevtIndex = 2
    }
    if (nextIndex === 3) {
      nextIndex = 0
    }
    this.List[nextIndex].class = 'active'
    this.List[currentArrayIndex].class = 'preactive'
    this.List[prevtIndex].class = 'proactive'
    this.current = this.List[nextIndex]
  }

}
