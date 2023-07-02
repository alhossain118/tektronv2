import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Best Ever Services Sofbox',
    description: 'If you are planning on developing a product landing app or website, take a look at this beautiful-crafted'
  };

  List: any[] = [
    { title: 'About Documentation', description: 'There are many variations of passages of Lorem Ipsum available.', linkText: 'Find out More', image: './assets/sofbox-v2/images/home-5/506.jpeg'},
    { title: 'Start your business on', description: 'There are many variations of passages of Lorem Ipsum available.', linkText: 'Find out More', image: './assets/sofbox-v2/images/home-5/507.jpeg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
