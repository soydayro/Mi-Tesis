import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule} from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withComponentInputBinding()), 
    provideClientHydration(), 
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideAnimations(), 
    importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule), provideAnimationsAsync()],
  
};

