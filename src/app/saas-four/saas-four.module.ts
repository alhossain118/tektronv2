import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { SliderModule } from './components/slider/slider.module';
import { ScreenshotSliderComponent } from './components/screenshot-slider/screenshot-slider.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [IndexComponent, ScreenshotSliderComponent, ServicesComponent, AboutComponent, FeaturesComponent, PortfolioComponent, PricingComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SliderModule,
    SofboxModule
  ]
})
export class SaasFourModule { }
