import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
 
  titleSectionProp: any = {
    title: 'Our Case Studies',
    description: 'If you are planning on developing a product landing app or website, take a look at this beautiful-crafted'
  };

  List: any[] = [
    { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/16.jpg'},
    { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/17.jpg'},
    { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/18.jpg'},
    { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/19.jpg'},
    { title: 'Dignissimos wisi cillum', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/20.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
