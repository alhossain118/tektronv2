import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { SliderModule } from './components/slider/slider.module';
import { ServiceComponent } from './components/service/service.component';
import { ServiceTabComponent } from './components/service-tab/service-tab.component';
import { FeatureComponent } from './components/feature/feature.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [IndexComponent, ServiceComponent, ServiceTabComponent, FeatureComponent, CaseStudyComponent, PricingComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SliderModule,
    SofboxModule
  ]
})
export class SaasSixModule { }
