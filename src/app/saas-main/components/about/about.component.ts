import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left',
    title: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
  };

  List: any[] =  [
    { title: 'Easy to Customize', icon: 'flaticon flaticon-project-management', hoverClass: 'purple-hover purple-arrow', description: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Multipurpose layout', icon: 'flaticon flaticon-business', hoverClass: 'org-hover org-arrow', description: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Unique Design', icon: 'flaticon flaticon-document-1', hoverClass: 'green-hover', description: 'There are many variations of passages of Lorem Ipsum available.'}
  ];

  service1: any[] = [
    { title : 'Boost SEO ranking' },
    { title : 'Marketing' },
    { title : 'Visual Reviews' },
  ];
  
  service2: any[] = [
    { title : 'Social Sharing' },
    { title : 'Retention' },
    { title : 'Reviews Generation' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
