import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
provideHttpClient
withFetch
withInterceptors
const errSrvce = new ErrorServiceClass()
const errorInserptor = errSrvce.errorInserptor
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ErrorServiceClass } from './errorInceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),provideRouter(routes),
     provideHttpClient( withFetch(), withInterceptors([errorInserptor]),),]
};
