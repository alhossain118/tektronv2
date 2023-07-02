import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './sofbox/root/root.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  /*{ path: '', loadChildren: './landing-page4/landing-page4.module#LandingPage4Module' },*/
  { path: '', loadChildren: () => import('./help-desk/help-desk.module').then(m => m.HelpDeskModule) },
  // { path: 'landing-page1', loadChildren: () => import('./landing-page4/landing-page4.module').then(m => m.LandingPage4Module) },
  // { path: 'landing-page2', loadChildren: () => import('./landing-page2/landing-page2.module').then(m => m.LandingPage2Module) },
  // { path: 'landing-page3', loadChildren: () => import('./landing-page1/landing-page1.module').then(m => m.LandingPage1Module) },
  // { path: 'landing-page4', loadChildren: () => import('./landing-page8/landing-page8.module').then(m => m.LandingPage8Module) },
  // { path: 'landing-page5', loadChildren: () => import('./landing-page9/landing-page9.module').then(m => m.LandingPage9Module) },
  // { path: 'landing-page6', loadChildren: () => import('./landing-page3/landing-page3.module').then(m => m.LandingPage3Module) },
  // { path: 'landing-page7', loadChildren: () => import('./landing-page5/landing-page5.module').then(m => m.LandingPage5Module) },
  // { path: 'landing-page8', loadChildren: () => import('./landing-page6/landing-page6.module').then(m => m.LandingPage6Module) },
  // { path: 'landing-page9', loadChildren: () => import('./landing-page10/landing-page10.module').then(m => m.LandingPage10Module) },
  // { path: 'landing-page10', loadChildren: () => import('./landing-page11/landing-page11.module').then(m => m.LandingPage11Module) },
  // { path: 'landing-page11', loadChildren: () => import('./landing-page14/landing-page14.module').then(m => m.LandingPage14Module) },
  // { path: 'sofbox-saas', loadChildren: () => import('./sofbox-sass/sofbox-sass.module').then(m => m.SofboxSassModule) },
  // { path: 'saas-main', loadChildren: () => import('./saas-main/saas-main.module').then(m => m.SaasMainModule) },
  // { path: 'saas-two', loadChildren: () => import('./saas-two/saas-two.module').then(m => m.SaasTwoModule) },
  // { path: 'saas-three', loadChildren: () => import('./saas-three/saas-three.module').then(m => m.SaasThreeModule) },
  // { path: 'saas-four', loadChildren: () => import('./saas-four/saas-four.module').then(m => m.SaasFourModule) },
  // { path: 'saas-five', loadChildren: () => import('./saas-five/saas-five.module').then(m => m.SaasFiveModule) },
  // { path: 'saas-six', loadChildren: () => import('./saas-six/saas-six.module').then(m => m.SaasSixModule) },
  // { path: 'payment-software', loadChildren: () => import('./payment-software/payment-software.module').then(m => m.PaymentSoftwareModule) },
  // { path: 'help-desk', loadChildren: () => import('./help-desk/help-desk.module').then(m => m.HelpDeskModule) },
  // { path: 'cloud-hosting', loadChildren: () => import('./cloud-hosting/cloud-hosting.module').then(m => m.CloudHostingModule) },
  // { path: 'about-us', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
  // { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  // { path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule) },
  // { path: 'careers', loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule) },
  // { path: 'team', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },
  // { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
  // { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
  // { path: 'portfolio-2-column', loadChildren: () => import('./portfolio/portfolio2columns/portfolio2columns.module').then(m => m.Portfolio2columnsModule) },
  // { path: 'portfolio-3-column', loadChildren: () => import('./portfolio/portfolio3columns/portfolio3columns.module').then(m => m.Portfolio3columnsModule) },
  // { path: 'portfolio-4-column', loadChildren: () => import('./portfolio/portfolio4columns/portfolio4columns.module').then(m => m.Portfolio4columnsModule) },
  // { path: 'portfolio-5-column', loadChildren: () => import('./portfolio/portfolio5columns/portfolio5columns.module').then(m => m.Portfolio5columnsModule) },
  // { path: 'portfolio-no-space', loadChildren: () => import('./portfolio/portfolio-no-space/portfolio-no-space.module').then(m => m.PortfolioNoSpaceModule) },
  // { path: 'portfolio-details', loadChildren: () => import('./portfolio/portfolio-details/portfolio-details.module').then(m => m.PortfolioDetailsModule) },
  // { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  // { path: 'blog-details', loadChildren: () => import('./blog-details/blog-details.module').then(m => m.BlogDetailsModule) },
  // { path: 'one-column-blog', loadChildren: () => import('./one-column-blog/one-column-blog.module').then(m => m.OneColumnBlogModule) },
  // { path: 'two-column-blog', loadChildren: () => import('./two-column-blog/two-column-blog.module').then(m => m.TwoColumnBlogModule) },
  // { path: 'three-column-blog', loadChildren: () => import('./three-column-blog/three-column-blog.module').then(m => m.ThreeColumnBlogModule) },
  // { path: 'left-sidebar-grid', loadChildren: () => import('./left-sidebar-grid/left-sidebar-grid.module').then(m => m.LeftSidebarGridModule) },
  // { path: 'right-sidebar-grid', loadChildren: () => import('./right-sidebar-grid/right-sidebar-grid.module').then(m => m.RightSidebarGridModule) },
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
