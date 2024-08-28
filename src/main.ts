import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { loanReducer } from './app/state/loan/loan.reducer';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNativeDateAdapter } from '@angular/material/core';
bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ loan: loanReducer }),
    provideRouter(routes),
    provideAnimations(),
    provideNativeDateAdapter()
  ]
}).catch(err => console.error(err));
