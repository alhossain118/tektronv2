import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SofboxModule } from '../sofbox/sofbox.module';
import { IndexComponent } from './index/index.component';
import { PlatformComponent } from './components/platform/platform.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { SalesComponent } from './components/sales/sales.component';
import { FeaturesComponent } from './components/features/features.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PostComponent } from './components/post/post.component';
import { SliderModule } from './components/slider/slider.module'


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [IndexComponent, PlatformComponent, ServiceComponent, AboutComponent, SalesComponent, FeaturesComponent, PortfolioComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SliderModule,
    SofboxModule
  ]
})
export class SaasThreeModule { }
