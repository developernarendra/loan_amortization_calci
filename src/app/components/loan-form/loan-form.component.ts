import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { setLoanDetails, calculateAmortization } from '../../state/loan/loan.actions';

@Component({
  selector: 'app-loan-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule
  ],
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css'],
})
export class LoanFormComponent {
  loanForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.loanForm = this.fb.group({
      loanAmount: [0, [Validators.required, Validators.min(0)]],
      interestRate: [0, [Validators.required, Validators.min(0)]],
      termYears: [0, [Validators.required, Validators.min(1)]],
      startDate: [null]
    });
  }

  onSubmit() {
    if (this.loanForm.valid) {
      const { loanAmount, interestRate, termYears, startDate } = this.loanForm.value;
      this.store.dispatch(setLoanDetails({ loanAmount, interestRate, termYears, startDate }));
      this.store.dispatch(calculateAmortization());
    }
  }
}
