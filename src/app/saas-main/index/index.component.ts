import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// @ts-ignore
import logoImg from '../../../assets/sofbox-v2/images/logo-color.png';
// @ts-ignore
import logoWhite from '../../../assets/sofbox-v2/images/logowhite.png'
// @ts-ignore
import footerLogo from '../../../assets/sofbox-v2/images/home-2/logo-white.png';
// @ts-ignore
import contactLogo from '../../../assets/sofbox-v2/images/home-1/35.png';
import { PluginsService } from '../../sofbox/plugins.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  public navLogo: string = logoImg;

  public footerLogo: string = footerLogo;

  public logoWhite: string = logoWhite;
  public logoClass:string = "logo";
  footerText: string = 'It is a long established fact that a reader will be distracted by the readable content.';
  footerTitle: string = 'Ready to get started?';
  footerDescription: string = 'It is a long established fact that a page when looking at its layout.';

  public navItems: any = [
    {
      href: '#iq-home', title: 'Home',
      _is_active: true
    },
    { href: '#iq-about', title: 'About Us' },
    { href: '#iq-feature', title: 'Feature' },
    { href: '#iq-blog', title: 'Blog' },
    { href: '#iq-contact', title: 'Contact Us' }
  ];

  List: any[] = [
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/215.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'},
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/216.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'},
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/217.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
  ];

  titleSectionProp: any = {
    title: 'Contact with our team',
    description: 'If you are planning on developing a product landing'
  };

  sectionProp: any = {
    class: 'pt-0',
    id: 'iq-contact'
  }
  contactDetail: any = {
    logo: contactLogo,
    address: '9840 Shore St. Fond Du Lac, WI 54935',
    number: '0 1223 456 789',
    mail: 'mail@sofbox.com'
  };

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    // Init all plugins...
    const current = this;
    current.plugins.revolutionSlider();
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function () {
      current.plugins.index();
    }, 200);
  }


}
