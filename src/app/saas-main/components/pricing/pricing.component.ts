import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../../sofbox/plugins.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Select your plan and number of users',
    description: 'If you are planning on developing a product landing'
  };

  List: any[] = [
  {
    id: 'pills-home-tab',
    href: 'pills-0',
    title: 'Monthly',
    active: true,
  },
  {
    id: 'pills-home-tab1',
    href: 'pills-1',
    title: 'Yearly',
    active: false,
  }]

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    // Init all plugins...
    const current = this;
    
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function () {
      current.plugins.index();
    }, 200);
  }
}
