import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  
  List: any[] = [
    { name: 'Marcal Hansh', design: 'Business Advisor', description: 'Consectetur Lorem ipsum dolor sit amet, consectetur adip isicing elit, dolor sed do eiusmod tempor consectetur adip isicing elit tempor.'},
    { name: 'Jancy Hanck', design: 'CEO Sofbox', description: 'Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden elit.'},
    { name: 'Walhan Bobe', design: 'CEO Sofbox', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
  ];

  images: any[] = [
    { image: './assets/sofbox-v2/images/home-4/404.jpeg' },
    { image: './assets/sofbox-v2/images/home-4/405.jpeg' },
    { image: './assets/sofbox-v2/images/home-4/406.jpeg' },
    { image: './assets/sofbox-v2/images/home-4/407.jpeg' },
    { image: './assets/sofbox-v2/images/home-4/408.jpeg' },
    { image: './assets/sofbox-v2/images/home-4/409.jpeg' },
    { image: './assets/sofbox-v2/images/home-4/410.jpeg' },
    { image: './assets/sofbox-v2/images/home-4/411.jpeg' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
