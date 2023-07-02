import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Our Services',
    description: 'If you are planning on developing a product landing'
  };

  List: any[] = [
    {
      title: 'Customized Invoices',
      image: './assets/sofbox-v2/images/home-9/90.png',
      desc: 'It is a long established fact that a reader will be distracted'
    },
    {
      title: 'Stock Management',
      image: './assets/sofbox-v2/images/home-9/91.png',
      desc: 'It is a long established fact that a reader will be distracted'
    },
    {
      title: 'Receivable & Payables',
      image: './assets/sofbox-v2/images/home-9/92.png',
      desc: 'It is a long established fact that a reader will be distracted'
    },
    {
      title: 'Manage Buying & Selling',
      image: './assets/sofbox-v2/images/home-9/93.png',
      desc: 'It is a long established fact that a reader will be distracted'
    },
    {
      title: 'Message Notification',
      image: './assets/sofbox-v2/images/home-9/94.png',
      desc: 'It is a long established fact that a reader will be distracted'
    },
    {
      title: 'Secure Backup',
      image: './assets/sofbox-v2/images/home-9/95.png',
      desc: 'It is a long established fact that a reader will be distracted'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
