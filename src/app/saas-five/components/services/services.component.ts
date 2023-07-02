import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Popular Services',
    description: 'If you are planning on developing a product landing app or website, take a look at this beautiful-crafted'
  };

  List: any[] = [
    {
      title: 'Customized Invoices',
      image: './assets/sofbox-v2/images/home-8/900.png',
      desc: 'It is a long established fact that a reader will be distracted.',
      active: true
    },
    {
      title: 'Detailed Reports',
      image: './assets/sofbox-v2/images/home-8/901.png',
      desc: 'It is a long established fact that a reader will be distracted.',
    },
    {
      title: 'Stock Management',
      image: './assets/sofbox-v2/images/home-8/902.png',
      desc: 'It is a long established fact that a reader will be distracted.',
    },
    {
      title: 'Secure Backup',
      image: './assets/sofbox-v2/images/home-8/903.png',
      desc: 'It is a long established fact that a reader will be distracted.',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
