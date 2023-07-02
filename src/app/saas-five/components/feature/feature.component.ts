import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Popular features',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!',
  };
  
  List: any[] = [
    { title: 'Customized Invoices', hoverClass: 'blue-hover' ,icon: 'flaticon flaticon-growth', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Stock Management', hoverClass: 'org-hover' ,icon: 'flaticon flaticon-paper-plane', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Receivable & Payables', hoverClass: 'green-hover' ,icon: 'flaticon flaticon-professional', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Manage Buying', hoverClass: 'blue-hover' ,icon: 'flaticon flaticon-reward', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Powerful & Secure', hoverClass: 'org-hover' ,icon: 'flaticon flaticon-business', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Fastest Return Filing', hoverClass: 'green-hover' ,icon: 'flaticon flaticon-professional', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Monthly Detailed', hoverClass: 'blue-hover' ,icon: 'flaticon flaticon-document-1', desc: 'There are many variations of passages of Lorem Ipsum available.'},
    { title: 'Product Management', hoverClass: 'org-hover' ,icon: 'flaticon flaticon-thumbs-up', desc: 'There are many variations of passages of Lorem Ipsum available.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
