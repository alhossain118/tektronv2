import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'Popular features that your business needs',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!',
  };

  List: any[] = [
    {
      title: 'Marcal Hansh',
      subtitle: 'Business Advisor',
      image: './assets/sofbox-v2/images/home-1/22.jpeg',
      desc: 'Consectetur Lorem ipsum dolor sit amet, consectetur adip isicing elit, dolor sed do eiusmod tempor consectetur adip isicing elit tempor.'
    },
    {
      title: 'Jancy Hanck',
      subtitle: 'CEO Sofbox',
      image: './assets/sofbox-v2/images/home-1/21.jpeg',
      desc: 'Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden elit.'
    },
    {
      title: 'Walhan Bobe',
      subtitle: 'CEO Sofbox',
      image: './assets/sofbox-v2/images/home-1/23.jpeg',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
