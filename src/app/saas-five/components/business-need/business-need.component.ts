import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-need',
  templateUrl: './business-need.component.html',
  styleUrls: ['./business-need.component.css']
})
export class BusinessNeedComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Popular features that your business needs',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimneypot burke tosser cras nice one boot fanny.',
    class: 'text-left'
  };

  List: any[] = [
    {
      title: 'Virtual Card',
      image: './assets/sofbox-v2/images/home-8/905.png',
      desc: 'There are many variations of passages of Lorem Ipsum available.'
    },
    {
      title: 'Buyer Protection',
      image: './assets/sofbox-v2/images/home-8/906.png',
      desc: 'There are many variations of passages of Lorem Ipsum available.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
