import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-work',
  templateUrl: './how-work.component.html',
  styleUrls: ['./how-work.component.css']
})
export class HowWorkComponent implements OnInit {

  titleSectionProp = {
    title: 'How does sofbox work?',
    description: 'If you are planning on developing a product landing',
    class: 'text-left'
  };

  List : any[] = [
    { title: 'Make Account', icon: 'flaticon flaticon-growth', hoverClass: 'purple-hover' },
    { title: 'Select Recipient', icon: 'flaticon flaticon-growth', hoverClass: 'org-hover' },
    { title: 'Send Money', icon: 'flaticon flaticon-growth', hoverClass: 'green-hover' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
