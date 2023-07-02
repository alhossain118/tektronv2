import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Featured Works.',
    description: 'If you are planning on developing a product landing app or website, take a look at this beautiful-crafted'
  };

  List: any[] = [
    { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-5/515.jpeg'},
    { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-5/514.jpeg'},
    { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-5/513.jpeg'},
    { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-5/512.jpeg'},
    { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-5/515.jpeg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
