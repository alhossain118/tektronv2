import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './components/about/about.component';
import { SliderModule } from './components/slider/slider.module';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BlogComponent } from './components/blog/blog.component';
import { PricingComponent } from './components/pricing/pricing.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [IndexComponent, AboutComponent, FeaturesComponent, TestimonialComponent, BlogComponent, PricingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SliderModule,
    SofboxModule
  ]
})
export class SaasMainModule { }
