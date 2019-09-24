import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReadingService } from './reading.service';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';
import {
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridReadingComponent } from './grid-reading/grid-reading.component';
import { AddOrUpdateReadingComponent } from './add-or-update-reading/add-or-update-reading.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent }
];

const config = {
  issuer: 'https://dev-273007.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa1ee0sigKBwHbky357',
  scope: 'openid profile email'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridReadingComponent,
    AddOrUpdateReadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [ReadingService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
