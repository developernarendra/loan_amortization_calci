import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoanFormComponent } from './components/loan-form/loan-form.component';
import { AmortizationChartComponent } from './components/amortization-chart/amortization-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoanFormComponent, AmortizationChartComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amortizationSchedule$: Observable<any[]>;

  constructor(private store: Store<{ loan: any }>) {
    this.amortizationSchedule$ = store.pipe(select(state => state.loan.amortizationSchedule));
  }
}
