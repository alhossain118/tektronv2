import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { SliderModule } from './components/slider/slider.module';
import { ServicesComponent } from './components/services/services.component';
import { HowWorkComponent } from './components/how-work/how-work.component';
import { BusinessNeedComponent } from './components/business-need/business-need.component';
import { FeatureComponent } from './components/feature/feature.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];


@NgModule({
  declarations: [IndexComponent, ServicesComponent, HowWorkComponent, BusinessNeedComponent, FeatureComponent, TestimonialComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SliderModule,
    SofboxModule
  ]
})
export class SaasFiveModule { }
