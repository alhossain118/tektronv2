import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  List: any[] = [
    { image: './assets/sofbox-v2/images/home-1/30.jpeg', class: 'img-one', href: '#',},
    { image: './assets/sofbox-v2/images/home-1/31.jpeg', class: 'img-two', href: '#',},
    { image: './assets/sofbox-v2/images/home-1/32.jpeg', class: 'img-three', href: '#',},
    { image: './assets/sofbox-v2/images/home-1/33.jpeg', class: 'img-four', href: '#',},
    { image: './assets/sofbox-v2/images/home-1/34.jpeg', class: 'img-five', href: '#', }
  ]
  constructor() { }

  ngOnInit() {
  }

}
