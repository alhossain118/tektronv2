import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SofboxModule } from './sofbox/sofbox.module';
import { LandingPage8Module } from './landing-page8/landing-page8.module';
import { LandingPage1Module } from './landing-page1/landing-page1.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import {ContactFormService} from './sofbox/components/contact-form/contact-form.service';
import { SaasMainModule } from './saas-main/saas-main.module';
import { SaasTwoModule } from './saas-two/saas-two.module';
import { SaasThreeModule } from './saas-three/saas-three.module';
import { SaasFourModule } from './saas-four/saas-four.module';
import { SaasFiveModule } from './saas-five/saas-five.module';
import { SaasSixModule } from './saas-six/saas-six.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideAnalytics(() => getAnalytics()),
    BrowserModule,
    AppRoutingModule,
    SofboxModule,
    LandingPage8Module,
    LandingPage1Module,
    RecaptchaModule,
    HttpClientModule,
    SaasMainModule,
    SaasTwoModule,
    SaasThreeModule,
    SaasFourModule,
    SaasFiveModule,
    SaasSixModule

  ],
  providers: [
    ContactFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideFirebaseApp(arg0: () => any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

function initializeApp(firebaseConfig: any): any {
  throw new Error('Function not implemented.');
}

function provideAnalytics(arg0: () => any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

function getAnalytics(): any {
  throw new Error('Function not implemented.');
}

