import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoanState } from '../../state/loan/loan.reducer';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-amortization-schedule',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './amortization-schedule.component.html',
  styleUrls: ['./amortization-schedule.component.css'],
})
export class AmortizationScheduleComponent {
  amortizationSchedule$: Observable<any[]>;

  constructor(private store: Store<{ loan: LoanState }>) {
    this.amortizationSchedule$ = this.store.select(state => state.loan.amortizationSchedule);
  }
}
