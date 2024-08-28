import { Route } from '@angular/router';
import { LoanFormComponent } from './components/loan-form/loan-form.component';
import { AmortizationScheduleComponent } from './components/amortization-schedule/amortization-schedule.component';

export const routes: Route[] = [
  {
    path: '',
    component: LoanFormComponent
  },
  {
    path: 'schedule',
    component: AmortizationScheduleComponent
  }
];
