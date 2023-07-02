import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left wow fadeInUp',
    title: 'Get Tips & Tricks on How to Skyrocket Your Sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny!It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
    descClass: 'title-design'
  };

  tabList: any [] = [
    { 
      title: 'Reporting Analysis',
      id: 'tab-reporting-analysis',
      tabImage: './assets/sofbox-v2/images/home-5/509.jpeg',
      image: './assets/sofbox-v2/images/home-5/510.png',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      active: true
    },
    { 
      title: 'Technical SEO Audit',
      id: 'tab-technical-seo-audit',
      tabImage: './assets/sofbox-v2/images/home-5/508.jpeg',
      image: './assets/sofbox-v2/images/home-5/511.png',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.tabContent').find('.active').removeClass('active show');
    jquery('#' + id).addClass('active show');
  }

}
